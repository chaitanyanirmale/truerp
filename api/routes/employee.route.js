import express from "express";
import { addEmployee } from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/add-emp", addEmployee);

export default router;
