import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route'

dotenv.config();

const PORT = process.env.PORT || 3001

mongoose.connect(process.env.MONGODB)
.then(()=>{
  console.log('MongoDb is connected');
})
.catch(err => {
  console.log(err);
});

const app = express();


app.listen(PORT,(req,res)=>{
  console.log(`server is running on port ${PORT}`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);