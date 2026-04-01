import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { addPurchase, deletePurchase, getPurchaseList, purchaseBill, updatePurchaseBill } from '../controllers/purchase.controller.js';


const router = express.Router();

router.post("/add-purchase", verifyToken, addPurchase);
router.get('/purchase-list', getPurchaseList);
router.delete('/delete/:id', deletePurchase);
router.get('/purchase-bill/:id', purchaseBill);
router.put('/update-purchase/:id', updatePurchaseBill);

export default router;