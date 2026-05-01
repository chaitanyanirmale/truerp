import express from 'express';
import { addBOMItem, createSO, getSO, getSoById, previewJCNumber, previewSONumber, updateSo } from '../controllers/so.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

router.post('/create',verifyToken, createSO);
router.get('/so-list', getSO);
router.get('/:id', getSoById);
router.put('/update/:id', updateSo);
router.get('/preview/JC-Number', previewJCNumber);
router.get('/preview/SO-Number', previewSONumber);
router.post('/so/:id/bom', addBOMItem);

export default router;
