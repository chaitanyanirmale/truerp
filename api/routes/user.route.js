import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { getCustomers, getUser, getUsers, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/user', verifyToken, getUser)
router.get('/user-list', verifyToken, getUsers)
router.get('/customers', getCustomers)
router.put('/update/:id', verifyToken, updateUser)



export default router;