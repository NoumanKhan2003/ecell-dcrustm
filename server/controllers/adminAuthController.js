import AdminModel from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import adminModel from "../models/adminModel.js";

const adminSignup = async (req, res) => {
  try {
    const { name, email,userType, password } = req.body;

    const existingAdmin = await AdminModel.findOne({ email });
    if (existingAdmin) {
      return res
        .status(409)
        .json({ message: "Admin already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new AdminModel({ name, email,userType, password: hashedPassword });
    await newAdmin.save();

    res.status(201).json({ message: "Signup successful", success: true });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ email });
    const errorMsg = "Auth failed: email or password is wrong";

    if (!admin) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    const isPassEqual = await bcrypt.compare(password, admin.password);
    if (!isPassEqual) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    const jwtToken = jwt.sign(
      { email: admin.email, _id: admin._id },
      process.env.jwt_secret,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login Success",
      success: true,
      jwtToken,
      email,
      name: admin.name,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const AdminRead = async (req, res) => {
  try {
    const readAdmin = await AdminModel.find();
    res.json(readAdmin);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Admin/User List" });
  }
};

const adminDelete = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const adminDelete = await adminModel.findByIdAndDelete(id);
    res.json({ message: "Admin deleted successfully", deletedAdmin: adminDelete });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Admin", details: error.message });
  }
};
export { adminSignup, adminLogin, AdminRead,adminDelete };
