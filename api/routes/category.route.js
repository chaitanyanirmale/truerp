import express from 'express'
import { addCategory, getCategories } from '../controllers/category.controller.js';

const router = express.Router();

router.post("/add-category", addCategory)
router.get("/category-list", getCategories)


export default router;