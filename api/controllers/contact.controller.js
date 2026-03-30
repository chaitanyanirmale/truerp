import Contact from "../models/contact.model.js";

export const saveContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const newMessage = new Contact({
      name,
      email,
      subject,
      message
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};