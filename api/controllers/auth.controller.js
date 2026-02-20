import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const adduser = async (req, res) => {
   const { role, companyName, name, mobile, password, alternateMobile, aadharNumber, gstNumber, panNumber, email, salaryPerDay, paymentTermsInDays, address, state, location, pinCode} = req.body || {};
   const hashedPassword = await bcrypt.hash(password, 10);
   const newUser = new User({
     role, companyName, name, mobile, password: hashedPassword, alternateMobile, aadharNumber, gstNumber, panNumber, email, salaryPerDay, paymentTermsInDays, address, state, location, pinCode
   });
   try {
      await newUser.save()
      res.status(201).json({success: true, message: "user created successfully"});
   } catch (error) {
     console.log(error);
   }
   
}

export const signin = async (req, res) => {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         return res.status(400).json({
            success: false,
            message: "Email and password are required",
         });
      }
      const validUser = await User.findOne({ email });
      if (!validUser) {
         return res.status(404).json({message: "User not found"})
      }
      const validPassword = await bcrypt.compare(password, validUser.password);
      if (!validPassword) {
         return res.status(400).json({message: "Invalid username or password"});
      }
      const token = jwt.sign({ id: validUser._id, role: validUser.role }, process.env.JWT_SECRET);
      const {password: pass, ...user} = validUser._doc;
      res
         .cookie('access_token', token, {httpOnly: true})
         .status(200)
         .json({token, user});
   }catch (error) {
      console.log(error);
   }
}