import express from 'express'
import { addMachinery } from '../controllers/machinery.controller.js';

const router = express.Router();

router.post('/add-machinery', addMachinery);

export default router;