import express from 'express'
import { addExpense, getExpenses } from '../controllers/expense.controller.js';

const router = express.Router();

router.post('/add-expense', addExpense);
router.get('/get-expenses', getExpenses);

export default router;
