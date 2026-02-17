import Employee from "../models/employee.model.js";
import Expense from "../models/expense.model.js";

export const addExpense = async (req, res) => {
  try {
    const { employee, amount, expenseType, expenseDate, note } = req.body;

    if (!employee || !amount || !expenseType || !expenseDate || !note) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    const employeeExists = await Employee.findById(employee);
      if (!employeeExists) {
        return res.status(404).json({
          success: false,
          message: "Employee not found",
        });
      }

    const expense = await Expense.create({
      employee,
      amount,
      expenseType,
      expenseDate,
      note,
    });

    res.status(201).json({
      success: true,
      message:"Expense Added Successfully",
      data: expense,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
  
};


export const getExpenses = async (req, res, next) => {
  try {
      const expenses = await Expense.find().populate("employee","fullname").sort({ createdAt: -1 });

      if (!expenses || expenses.length === 0) {
        return res.status(200).json({
          success: true,
          count: 0,
          data: [],
        });
      }
      
      res.status(200).json({
        success: true,
        count: expenses.length,
        data: expenses,
      });
  
    } catch (error) {
      console.log(error);
      next(error);
    }

}