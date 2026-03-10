import mongoose from "mongoose";

const grrSchema = mongoose.Schema({
    grrNo:{
        type: String,
        required: true,
    },
    grrDate: {
        type: Date,
        required: true,
    }
},{ timestamps: true });

const GRR = mongoose.model("GRR", grrSchema);

export default GRR;