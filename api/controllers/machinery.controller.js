import Machinery from "../models/machinery.model.js";


export const addMachinery = async (req, res, next) => {
  try {
    const { name, description, manufacturer, modelNumber, serialNumber, purchaseDate, purchasePrice} = req.body;

    if ( !name || !description || !manufacturer || !modelNumber || !serialNumber || !purchaseDate || !purchasePrice) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await Machinery.findOne({ serialNumber });
    if (existing) {
      return res.status(400).json({ message: "Serial number already exists" });
    }

    const machinery = await Machinery.create({ name, description, manufacturer, modelNumber, serialNumber, purchaseDate: new Date(purchaseDate), purchasePrice: Number(purchasePrice)});

    res.status(201).json({
      success: true,
      message: "Machinery added successfully",
      data: machinery
    });

  } catch (error) {
    next(error);
  }
};