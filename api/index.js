import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';



dotenv.config();

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch(err => {
    console.log(err);
  });

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);


app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});
