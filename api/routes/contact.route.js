import express from 'express'
import { getEnquiries, saveContactMessage } from '../controllers/contact.controller.js';

const router = express.Router(); 

router.post("/send-message", saveContactMessage);
router.get('/enquiries', getEnquiries);


export default router;