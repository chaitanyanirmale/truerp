import SO from '../models/so.model.js';
import User from '../models/user.model.js'
import Counter from '../utils/counter.js';
import { getFinancialYear } from '../utils/financialYear.js';

export const generateJCNumber = async () => {
    const counter = await Counter.findOneAndUpdate(
        {name: "jc"},
        {$inc: {sequence: 1}},
        {returnDocument: "after", upsert: true}
    );
    
    const sequence = counter.sequence;
    const jcNumber = String(sequence).padStart(4, "0");
    const fy = getFinancialYear();
    
    return `JC-${fy}-${jcNumber}`
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
        const fy = getFinancialYear();
        
        const jcNumber = `JC-${fy}-${padded}`;
        
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
    const fy = getFinancialYear();

    return `SO-${soNumber}-${fy}`;
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
            const fy = getFinancialYear();
        
            const soNumber = `SO-${padded}-${fy}`;
        
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

        const { customer, itemDesc, itemQty, majorMinorNumber, receivedDate, expectedDate, status, orderType, drawingRevisionNumber, poNumber, poDate, remark} = req.body;
        
        if (!customer || !itemDesc || !itemQty) {
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

        const soNumber = generateSONumber();
        const existingSO = await SO.findOne({ soNumber });

        if (existingSO) {
            return res.status(400).json({
                success: false,
                message: "SO Number already exists",
            });
        }
        const jobCardNumber = await generateJCNumber();
        const newSO = await SO.create({ jobCardNumber, customer, soNumber, itemDesc, itemQty, majorMinorNumber, receivedDate, expectedDate, status, orderType, drawingRevisionNumber, poNumber, poDate, remark});

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