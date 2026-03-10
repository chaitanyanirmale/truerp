import express from 'express'
import { createGRR, getGRR, previewGRR } from '../controllers/grr.controller.js';

const router = express.Router();

router.get('/preview', previewGRR);
router.post('/create', createGRR)
router.get('/grr-list', getGRR);

export default router;