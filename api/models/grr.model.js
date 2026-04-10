import mongoose from "mongoose";

const grrSchema = mongoose.Schema({
    grrNo:{
        type: String,
        required: true,
    },
    grrDate: {
        type: Date,
        required: true,
    },
    poId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PO",
      required: true,
    },

    soId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SO",
      required: true,
    },

    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },

    receivedQty: {
      type: Number,
      required: true,
      min: 1,
    },

    rejectedQty: {
      type: Number,
      default: 0,
      min: 0,
    },

    acceptedQty: {
      type: Number,
      default: 0,
      min: 0,
    },

    remark: {
      type: String,
      trim: true,
    },
},{ timestamps: true });

const GRR = mongoose.model("GRR", grrSchema);

export default GRR;