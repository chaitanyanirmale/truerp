import Category from "../models/category.model.js";

export const addCategory = async (req, res, next) => {
    try{
        const {name, sequenceNumber} = req.body;
        if (!name || !sequenceNumber) {
            return res.status(400).json({
                success: false,
                message: "Required fields missing",
            });
        }
    
        const newCategory = new Category({
            name, sequenceNumber,
        })
        const savedCategory = await newCategory.save();
        res.status(201).json({
                success: true,
                message: "Category added successfully",
                data: savedCategory,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({parent:null}).sort({ sequenceNumber: 1 });

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
};