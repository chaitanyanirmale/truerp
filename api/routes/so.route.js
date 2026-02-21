import express from 'express';
import { createSO, getSO } from '../controllers/so.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

router.post('/create',verifyToken, createSO);
router.get('/so-list', getSO);

export default router;
