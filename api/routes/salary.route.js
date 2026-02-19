import express from "express";
import Salary from "../models/salary.model.js";
import { createSalary, getSalaries } from "../controllers/salary.controller.js";


const router = express.Router();

router.post('/create', createSalary);
router.get('/salary-list', getSalaries);

export default router;