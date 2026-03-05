import express from 'express'
import { addMainCategory, addSubCategory, getMainCategories, getSingleSubCategory, getSubCategories } from '../controllers/category.controller.js';

const router = express.Router();

router.post("/add-maincategory", addMainCategory)
router.post("/add-subcategory", addSubCategory)
router.get("/maincategory-list", getMainCategories)
router.get("/subcategory-list", getSubCategories)
router.get("/subcategory/:id", getSingleSubCategory)


export default router;