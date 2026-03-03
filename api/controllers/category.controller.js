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


export const addSubCategory = async (req, res, next) => {
  try{
    const {mainCategory, subCategory} = req.body;
    if (!mainCategory || !subCategory) {
        return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }
    const parentCategory = await Category.findById(mainCategory);
    if (!parentCategory) {
      return res.status(404).json({
        success: false,
        message: "Main category not found",
      });
    }

    const lastCategory = await Category.findOne()
      .sort({ sequenceNumber: -1 });

    const nextSequence = lastCategory ? lastCategory.sequenceNumber + 1 : 1;

    const newSubCategory = new Category({
      name: subCategory.trim(),
      parent: mainCategory,
      sequenceNumber: nextSequence,
    })

    const savedCategory = await newSubCategory.save();
    res.status(201).json({
      success: true,
      message: "Sub Category added successfully",
      data: savedCategory,
    });
  }catch(error){
    console.log(error);
    next(error);
  }
}

export const getSubCategories = async (req, res, next) => {
  try {
    const subCategories = await Category.find({
      parent: { $ne: null },
    })
      .populate("parent", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: subCategories,
    });

  } catch (error) {
    next(error);
  }
};