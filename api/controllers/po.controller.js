import PO from '../models/po.model.js';
import SO from '../models/so.model.js'
import Counter from '../utils/counter.js'
import { getFinancialYear } from '../utils/financialYear.js';


export const generatePoNumber = async () => {
    const counter = await Counter.findOneAndUpdate(
        {name: "po"},
        {$inc: {sequence: 1}},
        {returnDocument: "after", upsert: true}
    );

    const sequence = counter.sequence;
    const poNumber = String(sequence).padStart(4, "0");
    const fy = getFinancialYear();

    return `PO-${poNumber}-${fy}`;
}

export const previewPoNumber = async (req, res, next) => {
    try {
            let counter = await Counter.findOne({ name: "po"});
            if(!counter){
                counter = await Counter.create({
                    name:"po",
                    sequence: 0,
                })
            }
        
            const nextSequence = counter.sequence + 1;
            const padded = String(nextSequence).padStart(4, "0");
            const fy = getFinancialYear();
        
            const poNumber = `PO-${padded}-${fy}`;
        
            res.status(200).json({
                success: true,
                poNumber
            });
    } catch (error) {
        next(error)
    }
}

export const createPo = async (req, res, next) => {
    try {
        if (!req.user || req.user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Only admin can create Purchase Order",
            });
        }
        const {supplier, poDate} = req.body;

        if(!supplier || !poDate){
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }
        const poNo = generatePoNumber();

        const newPo = await PO.create({
            poNo, ...req.body
        });
        res.status(201).json({
            success: true,
            message: "Purchase Order created successfully",
            data: newPo,
        });
    } catch (error) {
        next(error);
    }
}

export const getPO = async (req, res, next) => {
  try {
    const po = await PO.find().populate("supplier").sort({ createdAt: -1 });

    const poWithSO = await Promise.all(
        po.map(async (po) => {
            const so = await SO.findOne({
                purchaseOrderId: po._id,
            });

            return {
            ...po.toObject(),
                soNumber: so ? so.soNumber : "Not Created",
            };
        })
    );
    res.status(200).json({
      success: true,
      count: poWithSO.length,
      data: poWithSO,
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
};