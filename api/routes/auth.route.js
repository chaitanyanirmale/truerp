import express from "express";
import { adduser, signin } from "../controllers/auth.controller.js";
import { saveContactMessage } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/adduser", adduser);
router.post("/signin", signin);
router.post("/send-message", saveContactMessage);

export default router;