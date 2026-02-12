import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ["admin","contractor","customer","driver","staff","supplier","transporter","worker"],
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    alternateMobile: {
      type: String,
    },

    aadhaarNumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    gstNumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    panNumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
    },

    salaryPerDay: {
      type: Number,
      default: 0,
    },

    paymentTermsInDays: {
      type: Number,
      default: 0,
    },

    address: {
      type: String,
    },

    state: {
      type: String,
      default: "Maharashtra",
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


const User = mongoose.model("User", userSchema);

export default User;