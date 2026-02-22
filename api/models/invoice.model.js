import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
    productName: String,
    hsn: String,
    unit: String,
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },

    unitPrice: {
        type: Number,
        required: true,
        min: 0,
    },  
    gstPercent:{
        type: Number, 
        default: 0,
    },
    subTotal: Number,
}, { _id: false });

invoiceSchema.pre("save", function (next) {
  let total = 0;

  this.items.forEach((item) => {
    const base = item.quantity * item.unitPrice;
    const gstAmount = base * (item.gstPercent / 100);
    item.subTotal = base + gstAmount;

    total += item.subTotal;
  });

  this.totalAmount = total;
  next();
});

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

    items: [itemSchema],

    totalAmount: {
      type: Number,
      default: 0,
    },

    poNumber: String,
    poDate: Date,
    challanNumber: String,
    challanDate: Date,

    transportType: String,
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
    bankDetails: {
      accountName: String,
      accountNumber: String,
      ifscCode: String,
      bankName: String,
      branch: String,
    },
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

export default mongoose.model("Invoice", invoiceSchema);