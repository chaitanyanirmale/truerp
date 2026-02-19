import Salary from "../models/salary.model.js";


export const createSalary = async (req, res, next) => {
    try {
        const {role, employee, month, year, salaryPerDay, salaryPerHour, totalWorkingDays, presentDays, absentDays, extraHours, weeklyOff, bonus,deduction, advance,other, pf,professionalTax, salaryDate, remark,} = req.body;

        const perDay = Number(salaryPerDay) || 0;
        const present = Number(presentDays) || 0;
        const extra = Number(extraHours) || 0;
        const perHour = perDay / 8;        
        const bonusAmount = Number(bonus) || 0;
        const deductionAmount = Number(deduction) || 0;
        const advanceAmount = Number(advance) || 0;
        const otherAmount = Number(other) || 0;
        const pfAmount = Number(pf) || 0;
        const professionalTaxAmount = Number(professionalTax) || 0;
        
        const grossSalary = (perDay * present) + (perHour * extra) + bonusAmount;

        const totalDeductions = (deductionAmount || 0) + (advanceAmount || 0) + (pfAmount || 0) + (professionalTaxAmount || 0) + (otherAmount || 0);

        const netSalary = Math.max(grossSalary - totalDeductions, 0);

        const salary = new Salary({
            role,
            employee,
            month,
            year,
            salaryPerDay: perDay,
            salaryPerHour: perHour,
            totalWorkingDays: Number(totalWorkingDays) || 0,
            presentDays: present,
            absentDays: Number(absentDays) || 0,
            extraHours: extra,
            weeklyOff: Number(weeklyOff) || 0,
            bonus: bonusAmount,
            grossSalary,
            deduction: deductionAmount,
            advance: advanceAmount,
            other: otherAmount,
            pf: pfAmount,
            professionalTax: professionalTaxAmount,
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


export const getSalaries = async (req, res, next) => {
    try {
    const salaries = await Salary.find()
      .populate("employee", "name")
      .sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: salaries,
    });
  } catch (error) {
    next(error);
  }
}