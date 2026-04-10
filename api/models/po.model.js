import mongoose from "mongoose";

const poSchema = mongoose.Schema({
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    poNo:{
        type: String,
        required: true,
    },
    poDate: {
        type: Date,
        required: true,
    },
    status: {
      type: String,
      enum: [
        "Pending",
        "Approved",
        "Converted to SO",
        "Partially Received",
        "Completed",
        "Cancelled",
      ],
      default: "Pending",
    },
    salesOrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SO",
        required: true
    }
},{ timestamps: true });

const PO = mongoose.model("PO", poSchema);

export default PO;