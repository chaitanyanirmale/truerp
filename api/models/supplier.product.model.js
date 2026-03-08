import mongoose from "mongoose";

const supplierProductSchema = new mongoose.Schema({
    supplierName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    unit: {
      type: String,
      required: true,
      trim: true,
    },

    stockCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

const SupplierProduct = mongoose.model("SupplierProduct", supplierProductSchema)

export default SupplierProduct;