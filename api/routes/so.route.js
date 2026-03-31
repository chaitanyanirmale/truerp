import express from 'express';
import { createSO, getSO, previewJCNumber, previewSONumber } from '../controllers/so.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

router.post('/create',verifyToken, createSO);
router.get('/so-list', getSO);
router.get('/previewJCNumber', previewJCNumber);
router.get('/previewSONumber', previewSONumber);

export default router;
