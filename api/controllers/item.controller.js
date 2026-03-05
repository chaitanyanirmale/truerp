import Counter from "../models/counter.model.js";
import Item from "../models/item.model.js";


export const generateItemCode = async (prefix) => {
  
  const counter = await Counter.findOneAndUpdate(
    { prefix },
    { $inc: { sequence: 1 } },
    { returnDocument: "after", upsert: true }
  );

  const number = counter.sequence;

  const itemCode = prefix + String(number).padStart(3, "0");

  return {
    itemCode,
    nextSequence: number
  };
};


export const previewItemCode = async (req, res, next) => {
  try {

    const { prefix } = req.params;

    const counter = await Counter.findOne({ prefix });
    if (!counter) {
      counter = await Counter.create({
        prefix,
        sequence: 0
      });
    }
    const nextSequence = counter ? counter.sequence + 1 : 1;

    const itemCode = prefix + String(nextSequence).padStart(3, "0");

    res.status(200).json({
      success: true,
      itemCode
    });

  } catch (error) {
    next(error);
  }
};

export const addItem = async (req, res) => {
  try {

    const {
      prefix,
      mainCategory,
      subCategory,
      itemName,
      perUnit,
      weightInGram,
      supplierPrice,
      customerPrice,
      minOrderQty,
      description
    } = req.body;

    if (!prefix) {
      return res.status(400).json({
        success: false,
        message: "Prefix is required"
      });
    }
    const { itemCode, nextSequence } = await generateItemCode(prefix);

    const item = await Item.create({
      prefix,
      mainCategory,
      subCategory,
      itemCode,
      itemName,
      perUnit,
      weightInGram,
      supplierPrice,
      customerPrice,
      minOrderQty,
      description,
      sequenceNumber: nextSequence
    });

    res.status(201).json({
      success: true,
      data: item
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
