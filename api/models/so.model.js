import mongoose from "mongoose";

const soSchema = new mongoose.Schema(
  {
    purchaseOrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PO",
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    soNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    jobCardNumber: {
      type: String,
      trim: true,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    itemDesc: {
      type: String,
      required: true,
      trim: true,
    },

    itemQty: {
      type: Number,
      required: true,
    },

    majorMinorNumber: {
      type: String,
      trim: true,
    },

    receivedDate: {
      type: Date,
    },

    expectedDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "processing",
        "dispatch",
        "complete",
        "hold",
      ],
      default: "pending",
    },

    orderType: {
      type: String,
      enum: ["Under Quotation", "Order Acceptance"],
    },

    drawingRevisionNumber: {
      type: String,
      trim: true,
    },

    poNumber: {
      type: String,
      trim: true,
    },

    poDate: {
      type: Date,
    },

    remark: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const SO = mongoose.model("SO", soSchema);

export default SO;