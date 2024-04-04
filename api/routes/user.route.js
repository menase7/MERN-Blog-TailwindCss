import expres from 'express'
import { verifyToken } from '../utils/verifyUser';

const router = expres.Router();

router.put('/update/:userId',verifyToken, updateUser);

export default router;

