import Salary from "../models/salary.model.js";


export const createSalary = async (req, res, next) => {
    try {
        const {role, employee, month, year, salaryPerDay, salaryPerHour, totalWorkingDays, presentDays, absentDays, extraHours, weeklyOff, bonus,deduction, advance,other, pf,professionalTax, salaryDate, remark,} = req.body;

        const grossSalary = (salaryPerDay * presentDays) + (salaryPerHour * extraHours) + (bonus || 0);

        const totalDeductions = (deduction || 0) + (advance || 0) + (pf || 0) + (professionalTax || 0) + (other || 0);

        const netSalary = grossSalary - totalDeductions;

        const salary = new Salary({
            role,
            employee,
            month,
            year,
            salaryPerDay,
            salaryPerHour,
            totalWorkingDays,
            presentDays,
            absentDays,
            extraHours,
            weeklyOff,
            bonus,
            grossSalary,
            deduction,
            advance,
            other,
            pf,
            professionalTax,
            netSalary,
            salaryDate,
            remark,
        });

        
        await salary.save();

        res.status(201).json({
            success: true,
            message: "Salary record created successfully",
            data: salary,
        });

    } catch (error) {
        next(error);
    }
}