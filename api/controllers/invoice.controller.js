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

export const generateInvoiceNumber = async (invoice) => {

  const counter = await Counter.findOneAndUpdate(
    { name: invoice },
    { $inc: { sequence: 1 } },
    { returnDocument: "after", upsert: true }
  );

  const seq = counter.sequence;

  const padded = String(seq).padStart(4, "0");

  const fy = getFinancialYear();

  return `VEL-${padded}-${fy}`;
};

export const previewInvoice = async (req, res, next) => {
  try {
    const {invoice} = req.params;
    
    let counter = await Counter.findOne({ name: invoice });

    if (!counter) {
      counter = await Counter.create({
        name: invoice,
        sequence: 0
      });
    }

    const nextSequence = counter.sequence + 1;

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