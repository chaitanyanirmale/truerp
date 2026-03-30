import express from "express";
import { addEmployee, deleteEmp, getEmployee, getEmployeeCode, getEmployees, updateEmployeeStatus } from "../controllers/employee.controller.js";

const router = express.Router();


router.post("/add-emp", addEmployee);
router.get("/employee", getEmployee);
router.get("/emp-list", getEmployees);
router.get("/generate-code", getEmployeeCode);
router.put("/update-status/:id", updateEmployeeStatus);
router.delete('/delete-emp/:id', deleteEmp);


export default router;
