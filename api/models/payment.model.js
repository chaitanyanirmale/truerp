import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    billId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Purchase",
        required: true
    },
    paidAmount: {
        type: Number,
        required: true
    },
    tdsDeduction: {
        type: Number,
        default: 0
    },
    otherDeduction: {
        type: Number,
        default: 0
    },
    paymentDate: {
        type: Date,
        required: true
    },
    paymentNote: {
        type: String
    }
}, { timestamps: true });

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;