import express from 'express';
import { createInvoice, getInvoices, getSingleInvoice, previewBillNumber, previewInvoice } from '../controllers/invoice.controller.js';

const router = express.Router();

router.post('/previewInvoice', previewInvoice);
router.post('/previewBillNo', previewBillNumber);
router.post('/create', createInvoice);
router.get('/invoice-list', getInvoices);
router.get("/:id", getSingleInvoice);

export default router;