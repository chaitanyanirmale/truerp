import express from "express";
import Salary from "../models/salary.model.js";
import { createSalary } from "../controllers/salary.controller.js";


const router = express.Router();

router.post('/create', createSalary);

export default router;