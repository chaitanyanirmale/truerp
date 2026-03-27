import PO from '../models/po.model.js';
import Counter from '../utils/counter.js'
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

export const generatePoNumber = async () => {
    const counter = await Counter.findOneAndUpdate(
        {name: "po"},
        {$inc: {sequence: 1}},
        {returnDocument: "after", upsert: true}
    );

    const sequence = counter.sequence;
    const poNumber = String(sequence).padStart(4, "0");
    const fy = getFinancialYear();

    return `VEL-${poNumber}-${fy}`;
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
        
            const nextSequence = (counter.sequence || 0) + 1;
            const padded = String(nextSequence).padStart(4, "0");
            const fy = getFinancialYear();
        
            const poNumber = `VEL-${padded}-${fy}`;
        
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
        const {so, supplier, poNo, poDate} = req.body;

        if(!so || !supplier || !poNo || !poDate){
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }

        const newPo = await PO.create({
            so, supplier, poNo, poDate
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