import express from "express";
import { createSalary, deleteSalary, getSalaries, getSalaryByEmployee, updateSalary } from "../controllers/salary.controller.js";


const router = express.Router();

router.post('/create', createSalary);
router.get('/salary-list', getSalaries);
router.get('/emp/:id', getSalaryByEmployee);
router.delete("/delete-salary/:id", deleteSalary);
router.put("/update/:id", updateSalary);

export default router;