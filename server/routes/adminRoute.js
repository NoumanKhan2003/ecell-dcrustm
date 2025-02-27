import express from "express";
import {
  adminLoginValidation,
  adminSignupValidation,
} from "../middlewares/adminValidation.js";
import { adminSignup, adminLogin } from "../controllers/adminAuthController.js";
const adminRouter = express.Router();

adminRouter.post("/adminLogin", adminLoginValidation, adminLogin);
adminRouter.post("/adminSignup", adminSignupValidation, adminSignup);
export default adminRouter;