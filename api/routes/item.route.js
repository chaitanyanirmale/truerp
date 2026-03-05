import express, { Router } from 'express'
import { addItem, previewItemCode } from '../controllers/item.controller.js'

const router =  express.Router()

router.post('/add-item', addItem);
router.get('/previewItemCode/:prefix', previewItemCode)

export default router;