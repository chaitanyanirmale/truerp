import express from 'express' 
import Purchase from "../models/purchase.model.js";
import Payment from '../models/payment.model.js';


export const addPayment = async (req, res, next) => {
    try {
        const {
            billId,
            paidAmount,
            tdsDeduction,
            otherDeduction,
            paymentDate,
            paymentNote
        } = req.body;

        const bill = await Purchase.findById(billId);

        if (!bill) {
            return res.status(404).json({
                message: "Bill not found"
            });
        }

        const payment = await Payment.create({
            billId,
            paidAmount,
            tdsDeduction,
            otherDeduction,
            paymentDate,
            paymentNote
        });

        const totalPaid = await Payment.aggregate([
            {
                $match: {
                    billId: bill._id
                }
            },
            {
                $group: {
                    _id: "$billId",
                    total: { $sum: "$paidAmount" }
                }
            }
        ]);

        const paid = totalPaid[0]?.total || 0;

        bill.dueAmount = bill.totalAmount - paid;

        if (paid === 0) {
            bill.paymentStatus = "Pending";
        } else if (paid < bill.totalAmount) {
            bill.paymentStatus = "Partial";
        } else {
            bill.paymentStatus = "Paid";
            bill.dueAmount = 0;
        }

        await bill.save();

        res.status(201).json({
            success: true,
            payment,
            bill
        });

    } catch (error) {
        next(error)
    }
}