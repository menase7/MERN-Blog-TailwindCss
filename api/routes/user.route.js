import expres from 'express'
import { verifyToken } from '../utils/verifyUser';
import { deleteUser, updateUser } from '../controllers/user.controller';

const router = expres.Router();

router.put('/update/:userId',verifyToken, updateUser);
router.delete('/delete/:userId',verifyToken, deleteUser);

export default router;

