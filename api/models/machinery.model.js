import mongoose from "mongoose";

const machinerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    manufacturer: {
        type: String,
        required: true,
    },
    modelNumber: {
        type: String,
        required: true,
    },
    serialNumber: {
        type: String,
        required: true,
        unique: true
    },
    purchaseDate: {
        type: Date,
        required: true,
    },
    purchasePrice: {
        type: Number,
        required: true,
    }
},{ timestamps : true});

const Machinery = mongoose.model("Machinery", machinerySchema);

export default Machinery;

