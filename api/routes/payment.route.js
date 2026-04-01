import express from 'express'; 
import { addPayment, getPaymentsByBill } from '../controllers/payment.controller.js';


const router = express.Router();

router.post('/add-payment', addPayment);
router.get("/history/:billId", getPaymentsByBill);

export default router;