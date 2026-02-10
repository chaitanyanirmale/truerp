import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Api is running on port", PORT)
})