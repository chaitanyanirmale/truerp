import mongoose from "mongoose";

const soSchema = new mongoose.Schema(
  {
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
      enum: ["pending", "complete", "dispatch", "hold"],
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