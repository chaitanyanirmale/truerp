import express, { Router } from 'express'
import { addItem, addSupplierProduct, getItem, getItems, getSupplierProductList, previewItemCode, updateItem } from '../controllers/item.controller.js'

const router =  express.Router()

router.post('/add-item', addItem);
router.post('/supplier-product', addSupplierProduct);
router.get('/previewItemCode/:prefix', previewItemCode)
router.get('/list', getItems)
router.get('/item/:id', getItem);
router.get('/sp-list', getSupplierProductList)
router.put('/update-item/:id', updateItem);

export default router;