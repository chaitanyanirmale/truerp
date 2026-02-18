import mongoose from "mongoose";

const salarySchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      trim: true,
    },

    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee", 
      required: true,
    },

    month: {
      type: Number,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    salaryPerDay: {
      type: Number,
      default: 0,
    },

    salaryPerHour: {
      type: Number,
      default: 0,
    },

    totalWorkingDays: {
      type: Number,
      default: 0,
    },

    presentDays: {
      type: Number,
      default: 0,
    },

    absentDays: {
      type: Number,
      default: 0,
    },

    extraHours: {
      type: Number,
      default: 0,
    },

    weeklyOff: {
      type: Number,
      default: 0,
    },

    bonus: {
      type: Number,
      default: 0,
    },

    grossSalary: {
      type: Number,
      default: 0,
    },

    deduction: {
      type: Number,
      default: 0,
    },

    advance: {
      type: Number,
      default: 0,
    },

    other: {
      type: Number,
      default: 0,
    },

    pf: {
      type: Number,
      default: 0,
    },

    professionalTax: {
      type: Number,
      default: 0,
    },

    netSalary: {
      type: Number,
      default: 0,
    },

    salaryDate: {
      type: Date,
    },

    remark: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Salary =  mongoose.model("Salary", salarySchema);

export default Salary;
