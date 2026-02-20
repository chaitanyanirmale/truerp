import express from 'express';
import { createSO } from '../controllers/so.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

router.post('/create',verifyToken, createSO);

export default router;
