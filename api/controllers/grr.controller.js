import GRR from "../models/grr.model.js";
import Counter from "../utils/counter.js";

export const generateGRRNumber = async () => {

  const counter = await Counter.findOneAndUpdate(
    { name: "grr" },
    { $inc: { sequence: 1 } },
    { returnDocument: "after", upsert: true }
  );

  const seq = counter.sequence;

  const padded = String(seq).padStart(4, "0");

  const now = new Date();
  const year = now.getFullYear();
  const nextYear = String(year + 1).slice(-2);

  const financialYear = `${year}-${nextYear}`;

  return `GRR-${padded}-${financialYear}`;
};


export const previewGRR = async (req, res, next) => {
  try {

    let counter = await Counter.findOne({ name: "grr" });

    if (!counter) {
      counter = await Counter.create({
        name: "grr",
        sequence: 0
      });
    }

    const nextSequence = counter.sequence + 1;

    const padded = String(nextSequence).padStart(4, "0");

    const now = new Date();
    const year = now.getFullYear();
    const fy = `${year}-${String(year + 1).slice(-2)}`;

    const grrNo = `GRR-${padded}-${fy}`;

    res.status(200).json({
      success: true,
      grrNo
    });

  } catch (error) {
    next(error);
  }
};

export const createGRR = async (req, res, next) => {

  try {

    const grrNo = await generateGRRNumber();

    const newGRR = await GRR.create({
      grrNo,
      ...req.body
    });

    res.status(201).json({
      success: true,
      data: newGRR
    });

  } catch (error) {
    next(error);
  }
};