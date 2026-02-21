import SO from '../models/so.model.js';
import User from '../models/user.model.js'

export const createSO = async (req, res, next) => {
    try {
        if (!req.user || req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Only admin can create Sales Order",
            });
        }

        const { customer, soNumber, jobCardNumber, itemDesc, itemQty, majorMinorNumber, receivedDate, expectedDate, status, orderType, drawingRevisionNumber, poNumber, poDate, remark} = req.body;
        
        if (!customer || !soNumber || !itemDesc || !itemQty) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }
        const existingCustomer = await User.findOne({
            _id: customer,
            role: "customer",
        });

         if (!existingCustomer) {
            return res.status(400).json({
                success: false,
                message: "Invalid customer selected",
            });
        }

        const existingSO = await SO.findOne({ soNumber });

        if (existingSO) {
            return res.status(400).json({
                success: false,
                message: "SO Number already exists",
            });
        }
        
        const newSO = await SO.create({ customer, soNumber, jobCardNumber, itemDesc, itemQty, majorMinorNumber, receivedDate, expectedDate, status, orderType, drawingRevisionNumber, poNumber, poDate, remark});

        res.status(201).json({
            success: true,
            message: "Sales Order created successfully",
            data: newSO,
        });
    } catch (error) {
        next(error)
    }
} 


export const getSO = async (req, res, next) => {
  try {
    const so = await SO.find().populate("customer", "name email role").sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: so.length,
      data: so,
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
};