import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ["staff","worker"],
    },

    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    reporting: {
      type: String,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    gender: {
      type: String,
      enum:['male', 'female']
    },
    dob: {
      type: Date,
    },

    aadharNumber: {
      type: String,
      unique: true,
      sparse: true,
    },
    panNumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    joiningDate: {
      type: Date,
    },

    leavingDate: {
      type: Date,
    },

    salaryPerDay: {
      type: Number,
      default: 0,
    },

    salaryPerHour: {
      type: Number,
      default: 0,
    },

    pfUanNo: {
      type: String,
    },

    biometricId: {
      type: String,
    },

    department: {
      type: String,
    },

    bankName: {
      type: String,
    },
    bankAccountNo: {
      type: String,
    },
    ifscCode: {
      type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    location: {
      type: String,
    },
    pinCode: {
      type: String,
    },
  },
  { timestamps: true }
);


const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;