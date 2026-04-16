import express from "express";
import { createSalary, deleteSalary, getSalaries, getSalaryByEmployee } from "../controllers/salary.controller.js";


const router = express.Router();

router.post('/create', createSalary);
router.get('/salary-list', getSalaries);
router.get('/emp/:id', getSalaryByEmployee);
router.delete("/delete-salary/:id", deleteSalary);

export default router;