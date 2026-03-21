import mongoose from "mongoose";

const poSchema = mongoose.Schema({
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