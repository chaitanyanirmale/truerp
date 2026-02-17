import express from "express";
import { addEmployee, getEmployees } from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/add-emp", addEmployee);
router.get("/emp-list", getEmployees);

export default router;
