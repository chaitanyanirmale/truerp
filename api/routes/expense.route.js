import express from 'express'
import { addExpense, deleteExpense, getExpenses } from '../controllers/expense.controller.js';

const router = express.Router();

router.post('/add-expense', addExpense);
router.get('/get-expenses', getExpenses);
router.delete('/delete/:id', deleteExpense);

export default router;
