import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { getUser, getUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/user', verifyToken, getUser)
router.get('/user-list', getUsers)



export default router;