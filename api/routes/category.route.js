import express from 'express'
import { addCategory, addSubCategory, getCategories, getSubCategories } from '../controllers/category.controller.js';

const router = express.Router();

router.post("/add-category", addCategory)
router.post("/add-subcategory", addSubCategory)
router.get("/category-list", getCategories)
router.get("/subcategory-list", getSubCategories)


export default router;