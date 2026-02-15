import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log("Api is running on port 3000")
})


export default app;