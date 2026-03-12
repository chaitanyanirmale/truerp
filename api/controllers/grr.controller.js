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

    let startYear;
    let endYear;

    if (now.getMonth() + 1 < 4) {
      startYear = now.getFullYear() - 1;
      endYear = now.getFullYear();
    } else {
      startYear = now.getFullYear();
      endYear = now.getFullYear() + 1;
    }

    const fy = `${startYear}-${String(endYear).slice(-2)}`;

    const grrNo = `GRR-${String(padded).padStart(4, "0")}-${fy}`;

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

export const getGRR = async (req, res, next) => {
  try {
    const grr = await GRR.find().sort({ createdAt: -1 });

    const formattedGRR = grr.map((g) => ({
      ...g._doc,
      grrDate: g.grrDate.toISOString().split("T")[0]
    }));
    res.status(200).json({
      success: true,
      count: formattedGRR.length,
      data: formattedGRR,
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
};