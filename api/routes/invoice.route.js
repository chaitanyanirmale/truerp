import express from 'express';
import { previewInvoice } from '../controllers/invoice.controller.js';

const router = express.Router();

router.get('/previewInvoice', previewInvoice);

export default router;