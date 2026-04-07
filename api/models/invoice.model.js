import mongoose from "mongoose";


const invoiceSchema = new mongoose.Schema(
  {
    invoiceType: {
      type: String,
      default: "Tax Invoice",
    },
    invoicePrefix: {
      type: String,
      default: "Invoice",
    },
    company: {
      type: String,
      enum: ["LLP", "Private Ltd",],
    },
    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
      index: true, 
    },
    invoiceDate: {
      type: Date,
      required: true,
      index: true,
    },

    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    consignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
    
    productName: String,
    hsn: String,
    unit: String,
    quantity: Number,
    unitPrice: Number,
    gstPercent: Number,
    taxableValue: Number,
    cgstRate: Number,
    cgstAmount: Number,
    sgstRate: Number,
    sgstAmount: Number,
    subTotal: Number,

    totalAmount: {
      type: Number,
      default: 0,
    },

    poNumber: String,
    poDate: Date,
    challanNumber: String,
    challanDate: Date,

    transportType: {
      type: String,
      enum: ["None", "Road", "Rail", "Air", "Ship/Road Cum Ship"],
      default: "None",
    },
    transportBillNo: String,
    vehicleNumber: String,
    dateOfSupply: Date,
    placeOfSupply: String,
    transporterName: String,
    transporterId: String,

    originalForRecipient: {
      type: Boolean,
      default: false,
    },
    duplicateForTransporter: {
      type: Boolean,
      default: false,
    },
    triplicateForSupplier: {
      type: Boolean,
      default: false,
    },
    // bankDetails: {
    //   accountName: String,
    //   accountNumber: String,
    //   ifscCode: String,
    //   bankName: String,
    //   branch: String,
    // },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Partially Paid", "Unpaid"],
      default: "Unpaid",
    },
    remark: String,
    termsAndConditions: String,
  },
  { timestamps: true }
);


const Invoice = mongoose.model("Invoice", invoiceSchema);

export default Invoice;