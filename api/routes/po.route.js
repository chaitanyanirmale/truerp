import express from 'express';
import { previewPoNumber } from '../controllers/po.controller.js';


const router = express.Router();

router.get('/previewPoNumber', previewPoNumber);


export default router;