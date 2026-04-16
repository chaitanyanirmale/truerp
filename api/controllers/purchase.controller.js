import Purchase from "../models/purchase.model.js";
import User from "../models/user.model.js";



export const addPurchase = async (req, res, next) => {
    try {
        const {supplier, invoiceNumber, invoiceDate, gstNumber, basicAmount, cgst, sgst, igst, paidAmount, paymentType, tdsDeduction, otherDeduction, paymentTerms, paymentDueDate, paymentMethod} = req.body;

        if (!supplier || !invoiceNumber || !invoiceDate || !basicAmount) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }

        const supplierExists = await User.findById(supplier);
        if (!supplierExists) {
            return res.status(404).json({
                success: false,
                message: "Supplier not found",
            });
        }

        const existingInvoice = await Purchase.findOne({ invoiceNumber });
        if (existingInvoice) {
            return res.status(400).json({
                success: false,
                message: "Invoice number already exists",
            });
        }

        const basic = Number(basicAmount) || 0;
        const cgstPercent = Number(cgst) || 0;
        const sgstPercent = Number(sgst) || 0;
        const igstPercent = Number(igst) || 0;
        const paid = Number(paidAmount) || 0;
        const tds = Number(tdsDeduction) || 0;
        const other = Number(otherDeduction) || 0;

        const cgstAmount = (basic * cgstPercent) / 100;
        const sgstAmount = (basic * sgstPercent) / 100;
        const igstAmount = (basic * igstPercent) / 100;

        const totalAmount = basic + cgstAmount + sgstAmount + igstAmount;
        const balanceAmount = totalAmount - paid - tds - other;

        let status = "Pending";

        if (balanceAmount <= 0) {
            status = "Paid";
        } else if (paid > 0) {
            status = "Partially Paid";
        }

        const purchase = await Purchase.create({
            supplier, invoiceNumber, invoiceDate, gstNumber, basicAmount: basic, cgst: cgstPercent, sgst: sgstPercent, igst: igstPercent,totalAmount, paidAmount: paid,balanceAmount, paymentType, tdsDeduction: tds, otherDeduction:other, paymentTerms, paymentDueDate, paymentMethod, status,
        })

        res.status(201).json({
            success: true,
            message: "Purchase Invoice Added Successfully",
            data: purchase,
        })
    } catch (error) {
        next(error);
    }
}

export const getPurchaseList = async (req, res, next) => {
    try {
    const purchases = await Purchase.find()
    .populate("supplier", "name invoiceNumber")
    .populate("payments")
    .sort({ createdAt: -1 });

    const newPurchases = purchases.map((p) => {
      const totalPaid = (p.payments || []).reduce(
        (sum, pay) => sum + pay.paidAmount,
        0
      );

      return {
        ...p.toObject(),
        totalPaid,
        remainingAmount: p.totalAmount - totalPaid,
        invoiceDate: p.invoiceDate
          ? p.invoiceDate.toISOString().split("T")[0]
          : "",
        lastPaymentDate: p.lastPaymentDate
          ? p.lastPaymentDate.toISOString().split("T")[0]
          : "",
      };
    });

    res.status(200).json({
      success: true,
      count: newPurchases.length,
      data: newPurchases,
    });
  } catch (error) {
    next(error);
  }
}

export const deletePurchase = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedPurchase = await Purchase.findByIdAndDelete(id);

    if (!deletedPurchase) {
      return res.status(404).json({
        success: false,
        message: "Purchase not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Purchase deleted successfully",
    });

  } catch (error) {
    next(error);
  }
};

export const purchaseBill = async (req, res) => {
   try {
    const purchaseBill = await Purchase.findById(req.params.id)
    .populate("supplier", "name companyName");

    if (!purchaseBill) {
      return res.status(404).json({
        success: false,
        message: "Purchase Bill not found",
      });
    }

    res.status(200).json({
      success: true,
      purchaseBill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const updatePurchaseBill = async (req, res) => {
  try {
    const updatedPurchase = await Purchase.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: 'after' }
    );

    res.status(200).json({
      success: true,
      purchase: updatedPurchase,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

