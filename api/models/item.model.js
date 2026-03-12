import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    mainCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    prefix:{
      type: String,
      required: true,
      enum:["P","TU","FT","G","V"]
    },
    itemCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    itemName: {
      type: String,
      required: true,
      trim: true,
    },

    hsnCode:{
      type:String
    },

    perUnit: {
      type: String,
      required: true,
      enum:["NOS", "PC", "MTR", "KG"]
    },

    gstRate:{
      type:Number,
      default:18
    },

    weightInGram: {
      type: Number,
    },

    itemType: {
      type: String,
      required: true,
      enum:["Item", "Raw Material"]
    },

    supplierPrice: {
      type: Number,
      default: 0,
    },

    customerPrice: {
      type: Number,
      required: true,
    },

    minOrderQty: {
      type: Number,
      default: 1,
    },

    description: {
      type: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;