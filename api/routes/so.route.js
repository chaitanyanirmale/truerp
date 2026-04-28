import express from 'express';
import { addBOMItem, createSO, getSO, getSoById, previewJCNumber, previewSONumber } from '../controllers/so.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

router.post('/create',verifyToken, createSO);
router.get('/so-list', getSO);
router.get('/:id', getSoById);
router.get('/previewJCNumber', previewJCNumber);
router.get('/previewSONumber', previewSONumber);
router.post('/so/:id/bom', addBOMItem);

export default router;
