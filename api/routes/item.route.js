import express, { Router } from 'express'
import { addItem, addSupplierProduct, getItems, getSupplierProductList, previewItemCode } from '../controllers/item.controller.js'

const router =  express.Router()

router.post('/add-item', addItem);
router.post('/supplier-product', addSupplierProduct);
router.get('/previewItemCode/:prefix', previewItemCode)
router.get('/list', getItems)
router.get('/sp-list', getSupplierProductList)

export default router;