import express from 'express'
import { addMachinery, getMachineryList } from '../controllers/machinery.controller.js';

const router = express.Router();

router.post('/add-machinery', addMachinery);
router.get('/machinery-list', getMachineryList);

export default router;