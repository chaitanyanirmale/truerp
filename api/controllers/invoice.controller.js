import Invoice from "../models/invoice.model.js";
import Counter from "../utils/counter.js";
import { getFinancialYear } from "../utils/financialYear.js";


export const generateInvoiceNumber = async (company) => {
  const prefix = company === "LLP" ? "INL" : "INPL";

  const counter = await Counter.findOneAndUpdate(
    { name: `invoice-${prefix}` },
    { $inc: { sequence: 1 } },
    { returnDocument: "after", upsert: true }
  );

  const seq = counter.sequence;

  const invoiceNumber = String(seq).padStart(4, "0");

  const fy = getFinancialYear();

  return `${prefix}-${invoiceNumber}-${fy}`;
};

export const previewInvoice = async (req, res, next) => {
  try {
    const { company } = req.body;    
    
    const prefix = company === "LLP" ? "INL" : "INPL";

    let counter = await Counter.findOne({ name: `invoice-${prefix}` });

    if (!counter) {
      counter = await Counter.create({
        name: `invoice-${prefix}`,
        sequence: 0
      });
    }

    const nextSequence = counter.sequence + 1;

    const padded = String(nextSequence).padStart(4, "0");

    const fy = getFinancialYear();

    const invoiceNo = `${prefix}-${padded}-${fy}`;

    res.status(200).json({
      success: true,
      invoiceNo
    });

  } catch (error) {
    next(error);
  }
};


export const createInvoice = async (req, res, next) => {
  try {
    const {
      invoiceType, invoicePrefix, company, invoiceDate, receiver, consignee, product, productName, hsn, unit, quantity, unitPrice, gstPercent, poNumber, poDate, challanNumber, challanDate, transportType, transportBillNo, vehicleNumber, dateOfSupply, placeOfSupply, transporterName, transporterId, originalForRecipient, duplicateForTransporter, triplicateForSupplier, paymentStatus, remark, termsAndConditions,
    } = req.body;
    
    if (!receiver || !quantity || !unitPrice) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    const qty = Number(quantity);
    const price = Number(unitPrice);
    const gst = Number(gstPercent || 0);

    const baseAmount = qty * price;
    const gstAmount = (baseAmount * gst) / 100;
    const subTotal = baseAmount + gstAmount;

    const invoiceNo = await generateInvoiceNumber(company);

    const invoice = await Invoice.create({
      invoiceType, invoicePrefix, company, invoiceNumber: invoiceNo, invoiceDate, receiver, consignee, product, productName, hsn, unit, quantity: qty, unitPrice: price, gstPercent: gst, subTotal, poNumber, poDate, challanNumber, challanDate, transportType, transportBillNo, vehicleNumber, dateOfSupply, placeOfSupply, transporterName, transporterId, originalForRecipient, duplicateForTransporter, triplicateForSupplier, paymentStatus, remark, termsAndConditions,
    })
  
    res.status(201).json({
        success: true,
        message: "Invoice Created Successfully",
        data: invoice,
    })
    
  } catch (error) {
    next(error)
  }
}


export const getInvoices = async (req, res, next) => {
  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const invoices = await Invoice.find()
      .populate("receiver", "companyName name")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    res.status(200).json({
      success: true,
      count: invoices.length,
      data: invoices
    });

  } catch (error) {
    next(error);
  }
};