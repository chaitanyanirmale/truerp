import express from 'express';
import { createInvoice, getInvoices, previewInvoice } from '../controllers/invoice.controller.js';

const router = express.Router();

router.post('/previewInvoice', previewInvoice);
router.post('/create', createInvoice);
router.get('/invoice-list', getInvoices);

export default router;