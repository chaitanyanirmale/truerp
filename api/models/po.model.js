import mongoose from "mongoose";

const poSchema = mongoose.Schema({
    so: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SO",
        required: true
    },
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
    }
},{ timestamps: true });

const PO = mongoose.model("PO", poSchema);

export default PO;