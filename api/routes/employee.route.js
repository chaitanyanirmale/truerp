import express from "express";
import { addEmployee, deleteEmp, getEmployee, getEmployeeCode, getEmployees, updateEmployeeStatus } from "../controllers/employee.controller.js";
import { verifyAdmin, verifyToken } from "../utils/verifyUser.js";

const router = express.Router();


router.post("/add-emp", addEmployee);
router.get("/employee", getEmployee);
router.get("/emp-list", getEmployees);
router.get("/generate-code", getEmployeeCode);
router.put("/update-status/:id",verifyToken, verifyAdmin, updateEmployeeStatus);
router.delete('/delete-emp/:id',verifyToken, verifyAdmin, deleteEmp);


export default router;
