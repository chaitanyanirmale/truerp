import Employee from "../models/employee.model.js";
import Counter from "../utils/counter.js";

export const generateEmployeeCode = async (department) => {
  const counter = await Counter.findOneAndUpdate(
    { name: `EMP_${department}` }, 
    { $inc: { sequence: 1 } },
    { returnDocument: "after", upsert: true }
  );

  const seq = counter.sequence;
  const padded = String(seq).padStart(4, "0");

  const year = new Date().getFullYear().toString().slice(-2);

  return `EMP-${department}-${padded}-${year}`;
};

export const getEmployeeCode = async (req, res) => {
  try {
    const { dept } = req.query;
    if (!dept) {
      return res.status(400).json({ error: "Department is required" });
    }
     const counter = await Counter.findOne({ name: `EMP_${dept}` });

    const seq = counter ? counter.sequence + 1 : 1;
    const padded = String(seq).padStart(4, "0");

    const year = new Date().getFullYear().toString().slice(-2);

    const code = `EMP-${dept}-${padded}-${year}`;
    res.json({ code });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addEmployee = async (req, res, next) => {
    try {
        const {
            role, department, position, fullname, reporting, mobile, email, gender, dob, aadharNumber, panNumber, joiningDate, leavingDate, salaryPerDay, salaryPerHour, pfUanNo, biometricId,  bankName, bankAccountNo, ifscCode, address, state, location, pinCode
        } = req.body;

        if (!role || !fullname || !mobile || !email || !department || !position) {
            return res.status(400).json({
                success: false,
                message: "Required fields missing",
            });
        }
        const existingEmployee = await Employee.findOne({ $or: [{ mobile }, { email }] });
        if (existingEmployee) {
            return res.status(400).json({
                success: false,
                message: "Employee with this mobile already exists",
            });
        }

        const empCode = await generateEmployeeCode(department);

        const newEmployee = new Employee({
            empcode: empCode, role,  department, position, fullname, reporting, mobile, email, gender, dob, aadharNumber, panNumber, joiningDate, leavingDate, salaryPerDay, salaryPerHour, pfUanNo, biometricId, bankName, bankAccountNo, ifscCode, address, state, location, pinCode
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

export const getEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.user.id).select("-password");
    if (!employee) {
      return next(errorHandler(404, 'Employee not found'));
    }
    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    console.log(error);
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

export const updateEmployeeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedEmp = await Employee.findByIdAndUpdate(
      id,
      { status },
      { returnDocument: 'after' }
    );

    res.status(200).json({
      success: true,
      emp: updatedEmp
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};


export const deleteEmp = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEmp = await Employee.findByIdAndDelete(id);

    if (!deletedEmp) {
      return res.status(404).json({
        success: false,
        message: "Employee record not found"
      });
    }
    if(user.role !== "admin"){
      
    }
    res.status(200).json({
      success: true,
      message: "Employee deleted successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};