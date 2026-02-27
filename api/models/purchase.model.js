import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    supplier:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    invoiceNumber: {
      type: String,
      required: true,
      trim: true,
    },

    invoiceDate: {
      type: Date,
      required: true,
    },

    gstNumber: {
      type: String,
      trim: true,
    },

    basicAmount: {
      type: Number,
      required: true,
      default: 0,
    },

    cgst: {
      type: Number,
      default: 0,
    },

    sgst: {
      type: Number,
      default: 0,
    },

    igst: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },

    paidAmount: {
      type: Number,
      default: 0,
    },

    balanceAmount: {
      type: Number,
      default: 0,
    },

    paymentType: {
      type: String,
      enum: ["Partial", "Full"],
      default: "Partial",
    },

    tdsDeduction: {
      type: Number,
      default: 0,
    },

    otherDeduction: {
      type: Number,
      default: 0,
    },

    paymentTerms: {
      type: Number,  
      default: 0,
    },

    paymentDueDate: {
      type: Date,
    },

    paymentMethod: {
      type: String, 
    },

    status: {
      type: String,
      enum: ["Pending", "Partially Paid", "Paid"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Purchase = mongoose.model("Purchase", purchaseSchema);

export default Purchase;