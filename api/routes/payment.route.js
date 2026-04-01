import express from 'express'; 
import { addPayment } from '../controllers/payment.controller.js';


const router = express.Router();

router.post('/add-payment', addPayment);

export default router;