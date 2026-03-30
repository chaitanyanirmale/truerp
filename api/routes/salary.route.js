import express from "express";
import { createSalary, deleteSalary, getSalaries } from "../controllers/salary.controller.js";


const router = express.Router();

router.post('/create', createSalary);
router.get('/salary-list', getSalaries);
router.delete("/delete-salary/:id", deleteSalary);

export default router;