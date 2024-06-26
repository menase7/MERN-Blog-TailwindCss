import express from 'express';
import { verifyToken } from '../utils/verifyUser.js'; // Corrected import path
import { deleteUser, updateUser, signout, getusers, getUser } from '../controllers/user.controller.js'; // Assuming controller file is .js

const router = express.Router();

router.get('/getusers', verifyToken, getusers);
router.get('/:userId', getUser);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signout);
 
export default router;
