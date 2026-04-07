import Invoice from "../models/invoice.model.js";
import Counter from "../utils/counter.js";
import { getFinancialYear } from "../utils/financialYear.js";
import { ToWords } from "to-words";

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

export const generateBillNumber = async () => {
  const counter = await Counter.findOneAndUpdate(
    { name: `bill` },
    { $inc: { sequence: 1 } },
    { returnDocument: "after", upsert: true }
  );

  const seq = counter.sequence;
  const billNumber = String(seq).padStart(4, "0");

  return `${billNumber}`;
}

export const previewBillNumber = async (req, res) => {
    let counter = await Counter.findOne({ name: 'bill' });
    if (!counter) {
      counter = await Counter.create({
        name: 'bill',
        sequence: 0
      });
    }
  
  const nextSequence = counter.sequence + 1;
  const padded = String(nextSequence).padStart(4, "0");
  const billNo = `${padded}`;

    res.status(200).json({
      success: true,
      billNo,
    });
}
 

export const createInvoice = async (req, res, next) => {
  try {
    const {
      invoiceType, invoicePrefix, company, invoiceDate, receiver, consignee, product, productName, hsn, unit, quantity, unitPrice, gstPercent, poNumber, poDate, challanNumber, challanDate, transportType, vehicleNumber, dateOfSupply, placeOfSupply, transporterName, transporterId, originalForRecipient, duplicateForTransporter, triplicateForSupplier, paymentStatus, remark, termsAndConditions,
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

    const taxableValue = qty * price;

    const cgstRate = gst / 2;
    const sgstRate = gst / 2;

    const cgstAmount = (taxableValue * cgstRate) / 100;
    const sgstAmount = (taxableValue * sgstRate) / 100;

    const totalGstAmount = cgstAmount + sgstAmount;
    const subTotal = taxableValue + totalGstAmount;

    const invoiceNo = await generateInvoiceNumber(company);
    const billNo = await generateBillNumber();

    const toWords = new ToWords({
        localeCode: "en-IN",
        converterOptions: {
            currency: true,
            ignoreDecimal: true,
            ignoreZeroCurrency: false,
        },
    });
    const amountInWords = toWords.convert(subTotal);

    const invoice = await Invoice.create({
      invoiceType, invoicePrefix, company, invoiceNumber: invoiceNo, invoiceDate, receiver, consignee, product, productName, hsn, unit, quantity: qty, unitPrice: price, gstPercent: gst, taxableValue, cgstRate, cgstAmount, sgstRate, sgstAmount, subTotal, poNumber, poDate, challanNumber, challanDate, transportType, transportBillNo: billNo, vehicleNumber, dateOfSupply, placeOfSupply, transporterName, transporterId, originalForRecipient, duplicateForTransporter, triplicateForSupplier, paymentStatus, remark, termsAndConditions, amountInWords
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

export const getSingleInvoice = async (req, res, next) => {
    try {
        const invoice = await Invoice.findById(req.params.id).populate("receiver consignee");

        if (!invoice) {
            return res.status(404).json({
                success: false,
                message: "Invoice not found",
            });
        }

        res.status(200).json({
            success: true,
            data: invoice,
        });
    } catch (error) {
        next(error);
    }
};