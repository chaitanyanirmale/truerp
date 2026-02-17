import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 1,
    },

    expenseType: {
      type: String,
      required: true,
      enum: ["Petrol", "Transport", "Rent", "Mobile Recharge", "Others"],
    },

    expenseDate: {
      type: Date,
      required: true,
    },

    note: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    // receipt: {
    //   type: String, 
    // },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;