import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import expenseRoutes from './routes/expense.route.js';
import employeeRoutes from "./routes/employee.route.js";
import salaryRoutes from "./routes/salary.route.js";
import soRoutes from "./routes/so.route.js";
import itemRoutes from "./routes/item.route.js";
import purchaseRoutes from "./routes/purchase.route.js";
import categoryRoutes from "./routes/category.route.js";
import grrRoutes from "./routes/grr.route.js";
import invoiceRoutes from "./routes/invoice.route.js";
import machineryRoutes from "./routes/machinery.route.js";
import poRoutes from "./routes/po.route.js";
import contactRoutes from "./routes/contact.route.js";
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

const app = express();
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
app.use(express.json())

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/expense', expenseRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/salary", salaryRoutes);
app.use("/api/so", soRoutes)
app.use("/api/items", itemRoutes)
app.use("/api/purchase", purchaseRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/grr", grrRoutes)
app.use("/api/invoice", invoiceRoutes)
app.use("/api/machinery", machineryRoutes)
app.use("/api/po", poRoutes)
app.use("/api/contact", contactRoutes)

app.listen(3000, () => {
  console.log("Api is running on port 3000")
})


export default app;