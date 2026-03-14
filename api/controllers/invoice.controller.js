import Invoice from "../models/invoice.model.js";
import Counter from "../utils/counter.js";

export const getFinancialYear = () => {

  const now = new Date();
  const month = now.getMonth() + 1; 
  const year = now.getFullYear();

  let startYear;
  let endYear;

  if (month < 4) {
    startYear = year - 1;
    endYear = year;
  } else {
    startYear = year;
    endYear = year + 1;
  }

  return `${startYear}-${String(endYear).slice(-2)}`;
};

export const generateInvoiceNumber = async () => {

  const counter = await Counter.findOneAndUpdate(
    { name: "invoice" },
    { $inc: { sequence: 1 } },
    { returnDocument: "after", upsert: true }
  );

  const seq = counter.sequence;

  const invoiceNumber = String(seq).padStart(4, "0");

  const fy = getFinancialYear();

  return `VEL-${invoiceNumber}-${fy}`;
};

export const previewInvoice = async (req, res, next) => {
  try {
    // const { invoice } = req.params;    

    let counter = await Counter.findOne({ name: "invoice" });

    if (!counter) {
      counter = await Counter.create({
        name: "invoice",
        sequence: 0
      });
    }

    const nextSequence = (counter.sequence || 0) + 1;

    const padded = String(nextSequence).padStart(4, "0");

    const fy = getFinancialYear();

    const invoiceNo = `VEL-${padded}-${fy}`;

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

    const invoiceNo = await generateInvoiceNumber("invoice");

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
      .populate("receiver", "companyName")
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