import express from "express";
import { addEmployee, getEmployee, getEmployees } from "../controllers/employee.controller.js";

const router = express.Router();


router.post("/add-emp", addEmployee);
router.get("/employee", getEmployee);
router.get("/emp-list", getEmployees);

export default router;
