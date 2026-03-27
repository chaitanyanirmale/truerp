import express from 'express';
import { createPo, previewPoNumber } from '../controllers/po.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/previewPoNumber', previewPoNumber);
router.post('/createPo',verifyToken, createPo)

export default router;