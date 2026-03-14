import express from 'express';
import { createInvoice, previewInvoice } from '../controllers/invoice.controller.js';

const router = express.Router();

router.get('/previewInvoice', previewInvoice);
router.post('/create', createInvoice);

export default router;