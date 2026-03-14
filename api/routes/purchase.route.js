import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { addPurchase, getPurchaseList } from '../controllers/purchase.controller.js';


const router = express.Router();

router.post("/add-purchase", verifyToken, addPurchase);
router.get('/purchase-list', getPurchaseList);

export default router;