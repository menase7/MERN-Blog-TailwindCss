import expres from 'express'

const router = expres.Router();

router.get('/register', (req,res)=>{
  res.json({message: "register"});
})


export default router;