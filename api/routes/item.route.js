import express, { Router } from 'express'
import { addItem, addSupplierProduct, getItems, previewItemCode } from '../controllers/item.controller.js'

const router =  express.Router()

router.post('/add-item', addItem);
router.post('/supplier-product', addSupplierProduct);
router.get('/previewItemCode/:prefix', previewItemCode)
router.get('/list', getItems)

export default router;