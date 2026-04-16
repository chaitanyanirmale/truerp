import express from 'express' 
import Purchase from "../models/purchase.model.js";
import Payment from '../models/payment.model.js';


// export const addPayment = async (req, res, next) => {
//     try {
//         const {
//             purchaseId,
//             paidAmount,
//             tdsDeduction,
//             otherDeduction,
//             paymentDate,
//             paymentNote
//         } = req.body;

//         const bill = await Purchase.findById(purchaseId);

//         if (!bill) {
//             return res.status(404).json({
//                 message: "Bill not found"
//             });
//         }

//         const payment = await Payment.create({
//             purchaseId,
//             paidAmount,
//             tdsDeduction,
//             otherDeduction,
//             paymentDate,
//             paymentNote
//         });

//         const totalPaid = await Payment.aggregate([
//             {$match: {
//                     purchaseId: bill._id
//                 }
//             },
//             {
//                 $group: {
//                     _id: "$purchaseId",
//                     total: { $sum: "$paidAmount" },
//                     totalTds: { $sum: "$tdsDeduction" },
//                     totalOther: { $sum: "$otherDeduction" }
//                 }
//             }
//         ]);

//         const paid = totalPaid[0]?.totalPaid || 0;
//         const tds = totalPaid[0]?.totalTds || 0;
//         const other = totalPaid[0]?.totalOther || 0;

//         const settledAmount = paid + tds + other;

//         bill.dueAmount = bill.totalAmount - settledAmount;

//         if (settledAmount === 0) {
//             bill.paymentStatus = "Pending";
//         } else if (settledAmount < bill.totalAmount) {
//             bill.paymentStatus = "Partial";
//         } else {
//             bill.paymentStatus = "Paid";
//             bill.dueAmount = 0;
//         }

//         await bill.save();

//         res.status(201).json({
//             success: true,
//             payment,
//             bill
//         });

//     } catch (error) {
//         next(error)
//     }
// }


export const addPayment = async (req, res) => {
  try {
    const {
      purchaseId,
      paidAmount,
      tdsDeduction = 0,
      otherDeduction = 0,
      paymentDate,
      paymentNote
    } = req.body;

    const payment = await Payment.create({
      purchaseId,
      paidAmount,
      tdsDeduction,
      otherDeduction,
      paymentDate,
      paymentNote
    });

    const purchase = await Purchase.findById(purchaseId);

    const newPaidAmount = Number(purchase.paidAmount || 0) + Number(paidAmount);

    const newTds = Number(purchase.tdsDeduction || 0) + Number(tdsDeduction);

    const newOther = Number(purchase.otherDeduction || 0) + Number(otherDeduction);

    const totalSettled = newPaidAmount + newTds + newOther;

    const newBalance = Number(purchase.totalAmount || 0) - totalSettled;

    let status = "Pending";

    if (newBalance <= 0) {
      status = "Paid";
    } else if (newPaidAmount > 0) {
      status = "Partially Paid";
    }

    await Purchase.findByIdAndUpdate(purchaseId, {
      paidAmount: newPaidAmount,
      tdsDeduction: newTds,
      otherDeduction: newOther,
      balanceAmount: newBalance,
      lastPaymentDate: new Date(paymentDate),
      status
    });

    res.status(201).json({
      success: true,
      payment
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getPaymentsByBill = async (req, res) => {
    try {
        const { purchaseId } = req.params;

        const payments = await Payment.find({ purchaseId })
            .sort({ paymentDate: -1 });

        res.status(200).json({
            success: true,
            payments
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
