import express from "express";
import { addEmployee, getEmployee, getEmployeeCode, getEmployees } from "../controllers/employee.controller.js";

const router = express.Router();


router.post("/add-emp", addEmployee);
router.get("/employee", getEmployee);
router.get("/emp-list", getEmployees);
router.get("/generate-code", getEmployeeCode);


export default router;
