import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
      index:true,
    },

    productCode: {
      type: String,
      unique: true,
      required: true,
      uppercase: true,
      trim: true,
      index: true,
    },

    description: {
      type: String,
    },

    hsn: {
      type: String,
      required: true,
    },

    unit: {
      type: String,
      required: true, 
    },

    gstPercent: {
      type: Number,
      default: 18,
    },

    sellingPrice: {
      type: Number,
      required: true,
    },

    purchasePrice: {
      type: Number,
    },

    stock: {
      type: Number,
      default: 0,
    },

    category: {
      type: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;