import Employee from "../models/employee.model.js";


export const addEmployee = async (req, res, next) => {
    try {
        const {
            role, fullname, reporting, mobile, email, gender, dob, aadharNumber, panNumber, joiningDate, leavingDate, salaryPerDay, salaryPerHour, pfUanNo, biometricId, department, bankName, bankAccountNo, ifscCode, address, state, location, pinCode
        } = req.body;

        if (!role || !fullname || !mobile || !email) {
            return res.status(400).json({
                success: false,
                message: "Required fields missing",
            });
        }
        const existingEmployee = await Employee.findOne({ mobile });
        if (existingEmployee) {
            return res.status(400).json({
                success: false,
                message: "Employee with this mobile already exists",
            });
        }
        const newEmployee = new Employee({
            role, fullname, reporting, mobile, email, gender, dob, aadharNumber, panNumber, joiningDate, leavingDate, salaryPerDay, salaryPerHour, pfUanNo, biometricId, department, bankName, bankAccountNo, ifscCode, address, state, location, pinCode
        });
        const savedEmployee = await newEmployee.save();
            res.status(201).json({
            success: true,
            message: "Employee added successfully",
            data: savedEmployee,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}


export const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: employees.length,
      data: employees,
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
};