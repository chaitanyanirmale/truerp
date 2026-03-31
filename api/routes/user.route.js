import express from 'express'
import { verifyAdmin, verifyToken } from '../utils/verifyUser.js';
import { deleteUser, getCustomers, getSuppliers, getSuppliersAndVendors, getUser, getUsers, updateUser, updateUserStatus } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/user', verifyToken, getUser)
router.get('/user-list', verifyToken, getUsers)
router.get('/customers', getCustomers)
router.get('/suppliers', getSuppliers)
router.get('/suppliers-vendors', getSuppliersAndVendors)
router.put('/update/:id', verifyToken, verifyAdmin, updateUser)
router.put('/update-status/:id', verifyToken, verifyAdmin, updateUserStatus)
router.delete("/user/:id", verifyToken, verifyAdmin, deleteUser);



export default router;