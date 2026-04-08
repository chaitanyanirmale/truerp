import Item from "../models/item.model.js";
import SupplierProduct from "../models/supplier.product.model.js";
import Counter from "../utils/counter.js";


export const generateItemCode = async (prefix) => {
  
  const counter = await Counter.findOneAndUpdate(
    { name: prefix },
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

    let counter = await Counter.findOne({ name: prefix });
    if (!counter) {
      counter = await Counter.create({
        name: prefix,
        sequence: 0
      });
    }
    const nextSequence = counter.sequence + 1;

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

    const { prefix, mainCategory, subCategory, itemName, perUnit, weightInGram, itemType, supplierPrice, customerPrice, minOrderQty, description} = req.body;

    if (!prefix) {
      return res.status(400).json({
        success: false,
        message: "Prefix is required"
      });
    }
    const { itemCode, nextSequence } = await generateItemCode(prefix);

    const item = await Item.create({ prefix, mainCategory, subCategory, itemCode, itemName, perUnit, weightInGram, itemType, supplierPrice, customerPrice, minOrderQty, description, sequenceNumber: nextSequence});

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

export const getItems = async (req, res, next) => {
  try {

    const items = await Item.find()
      .populate("mainCategory", "name")
      .populate("subCategory", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });

  } catch (error) {
    next(error);
  }
};

export const getItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id)
      .populate("mainCategory")
      .populate("subCategory");
    if (!item) {
      return res.status(404).json({
        message: "Item not found"
      });
    }
    res.status(200).json({
      success: true,
      item
    });
  } catch (error) {
    next(error)
  }
}

export const updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: 'after' }
        );
        if (!updatedItem) {
            return res.status(404).json({
                success: false,
                message: "Item not found"
            });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addSupplierProduct = async (req, res, next) => {
  try {

    const { supplierName, price, unit, stockCount } = req.body;

    const newProduct = new SupplierProduct({
      supplierName,
      price,
      unit,
      stockCount
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Supplier Product Added",
      data: newProduct
    });

  } catch (error) {
    next(error);
  }
};


export const getSupplierProductList = async (req, res, next) => {
    try {
    const supplierProduct = await SupplierProduct.find()
      .select("supplier price unit stockCount createdAt")
      .populate("supplierName", "companyName role")
      .sort({createdAt : -1})
    res.status(200).json({
      success: true,
      count: supplierProduct.length,
      data: supplierProduct,
    });
  } catch (error) {
    next(error);
  }
}
