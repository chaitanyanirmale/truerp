import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { addPurchase } from '../controllers/purchase.controller.js';


const router = express.Router();

router.post("/add-purchase", verifyToken, addPurchase);

export default router;