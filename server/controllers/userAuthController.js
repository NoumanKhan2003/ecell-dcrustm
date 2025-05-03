import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSignup = async (req, res) => {
  try {
    const { name, email, userType, password } = req.body;

    const existinguser = await userModel.findOne({ email });
    if (existinguser) {
      return res
        .status(409)
        .json({ message: "user already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = new userModel({
      name,
      email,
      userType,
      password: hashedPassword,
    });
    await newuser.save();

    res.status(201).json({ message: "Signup successful", success: true });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    const errorMsg = "Auth failed: email or password is wrong";

    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.jwt_secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login Success",
      success: true,
      jwtToken,
      email,
      name: user.name,
      userType: user.userType,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const userRead = async (req, res) => {
  try {
    const readuser = await userModel.find();
    res.json(readuser);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user/User List" });
  }
};

const userReadOne = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch user", details: error.message });
  }
};

const userDelete = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const userDelete = await userModel.findByIdAndDelete(id);
    res.json({ message: "user deleted successfully", deletedUser: userDelete });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete user", details: error.message });
  }
};

const userEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = req.body;

    if (!id) {
      return res.status(400).json({ error: "User ID is required" });
    }

    if (updateUser.password) {
      updateUser.password = await bcrypt.hash(updateUser.password, 10);
    }

    const userEdit = await userModel
      .findByIdAndUpdate(id, updateUser, {
        new: true,
        runValidators: true,
      })
      .select("-password");

    if (!userEdit) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User Updated successfully", editedUser: userEdit });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to Edit User", details: error.message });
  }
};

export { userSignup, userLogin, userRead, userDelete, userEdit, userReadOne };
