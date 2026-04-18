import PO from '../models/po.model.js';
import SO from '../models/so.model.js';
import User from '../models/user.model.js'
import Counter from '../utils/counter.js';

export const generateJCNumber = async () => {
    const counter = await Counter.findOneAndUpdate(
        {name: "jc"},
        {$inc: {sequence: 1}},
        {returnDocument: "after", upsert: true}
    );
    
    const sequence = counter.sequence;
    const jcNumber = String(sequence).padStart(4, "0");
    
    return `JC-${jcNumber}`
}
export const previewJCNumber = async (req, res, next) => {
    try {
        let counter = await Counter.findOne({ name: "jc"});
        if(!counter){
            counter = await Counter.create({
                name:"jc",
                sequence: 0,
            })
        }
        
        const nextSequence = counter.sequence + 1;
        const padded = String(nextSequence).padStart(4, "0");
        
        const jcNumber = `JC-${padded}`;
        
        res.status(200).json({
            success: true,
            jcNumber
        });
    } catch (error) {
        next(error)
    }
}
export const generateSONumber = async () => {
    const counter = await Counter.findOneAndUpdate(
        {name: "so"},
        {$inc: {sequence: 1}},
        {returnDocument: "after", upsert: true}
    );

    const sequence = counter.sequence;
    const soNumber = String(sequence).padStart(4, "0");

    return `SO-${soNumber}`;
}

export const previewSONumber = async (req, res, next) => {
    try {
            let counter = await Counter.findOne({ name: "so"});
            if(!counter){
                counter = await Counter.create({
                    name:"so",
                    sequence: 0,
                })
            }
        
            const nextSequence = counter.sequence + 1;
            const padded = String(nextSequence).padStart(4, "0");
        
            const soNumber = `SO-${padded}`;
        
            res.status(200).json({
                success: true,
                soNumber
            });
    } catch (error) {
        next(error)
    }
}
export const createSO = async (req, res, next) => {
    try {
        if (!req.user || req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Only admin can create Sales Order",
            });
        }

        const { purchaseOrderId, customer, itemId, itemDesc, itemQty, majorMinorNumber, receivedDate, expectedDate, status, orderType, drawingRevisionNumber, poNumber, poDate, remark} = req.body;
        
        if (!purchaseOrderId || !customer || !itemId || !itemQty) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }
        if (Number(itemQty) <= 0) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be greater than 0",
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

        const existingPO = await PO.findById(purchaseOrderId);

        if (!existingPO) {
            return res.status(404).json({
                success: false,
                message: "Purchase Order not found",
            });
        }

        if (existingPO.so) {
            return res.status(400).json({
                success: false,
                message: "SO already created for this PO",
            });
        }

        const soNumber = await generateSONumber(); 
        const jobCardNumber = await generateJCNumber();

        const newSO = await SO.create({ purchaseOrderId, jobCardNumber, customer, soNumber, itemId,  itemDesc, itemQty, majorMinorNumber, receivedDate, expectedDate, status, orderType, drawingRevisionNumber, poNumber, poDate, remark});

        existingPO.so = newSO._id;
        existingPO.status = "Converted to SO";

        await existingPO.save();

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

export const getSoById = async (req, res, next) => {
    try {
        const so = await SO.findById(req.params.id);
        if (!so) {
            return res.status(404).json({
                message: "So not found"
            });
        }

        res.status(200).json({
            success: true,
            so
        })
    } catch (error) {
        next(error)
    }
}