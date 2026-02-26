import User from "../models/user.model.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
}

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
}


export const getCustomers = async (req, res, next) => {
  try {
    const customers = await User.find({ role: "customer" })
      .select("name email") 
      .sort({ createdAt: -1 });

    res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res) => {
  try {

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {$set: req.body,},
      { returnDocument: 'after' }
    ).select("-password");

    res.status(200).json({
      success: true,
      data: updatedUser,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await User.find({ role: "supplier" })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: suppliers.length,
      data: suppliers,
    });
  } catch (error) {
    next(error);
  }
};