// LOGIC, BUSINESS LOGIC
const User = require("../models/userModel");

exports.home = (req, res) => {
  res.send("Home route from controller to route to server.js");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    // To check all details
    if (!name || !email) {
      throw new Error("Name and Email are required");
    }

    // if user exists or not
    const userExists = await User.findById({ email });
    if (userExists) {
      throw new Error("Email is already exists");
    }

    // Inserting into database
    const user = await User.create({ name, email });
    res.status(201).json({
      sucess: true,
      message: "User is created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User is updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "user is successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
