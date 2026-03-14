import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { deleteUser, getCustomers, getSuppliers, getSuppliersAndVendors, getUser, getUsers, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/user', verifyToken, getUser)
router.get('/user-list', verifyToken, getUsers)
router.get('/customers', getCustomers)
router.get('/suppliers', getSuppliers)
router.get('/suppliers-vendors', getSuppliersAndVendors)
router.put('/update/:id', verifyToken, updateUser)

router.delete("/user/:id", verifyToken, deleteUser);



export default router;