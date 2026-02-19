import express from "express";
import { addEmployee, getEmployee, getEmployees } from "../controllers/employee.controller.js";

const router = express.Router();


router.get("/employee", getEmployee);
router.post("/add-emp", addEmployee);
router.get("/emp-list", getEmployees);

export default router;
