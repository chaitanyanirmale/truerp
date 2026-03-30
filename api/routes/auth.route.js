import express from "express";
import { adduser, signin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/adduser", adduser);
router.post("/signin", signin);

export default router;