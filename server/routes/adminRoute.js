import express from "express";
import {
  adminLoginValidation,
  adminSignupValidation,
} from "../middlewares/adminValidation.js";
import {
  adminSignup,
  adminLogin,
  AdminRead,
} from "../controllers/adminAuthController.js";
const adminRouter = express.Router();

adminRouter.post("/adminLogin", adminLoginValidation, adminLogin);
adminRouter.post("/adminSignup", adminSignupValidation, adminSignup);
adminRouter.get("/", AdminRead);
export default adminRouter;
