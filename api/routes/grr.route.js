import express from 'express'
import { createGRR, previewGRR } from '../controllers/grr.controller.js';

const router = express.Router();

router.get('/preview', previewGRR);
router.post('/create', createGRR)

export default router;