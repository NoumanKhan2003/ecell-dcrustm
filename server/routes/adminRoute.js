import express from "express";
import {
  adminLoginValidation,
  adminSignupValidation,
} from "../middlewares/adminValidation.js";
import {
  adminSignup,
  adminLogin,
  AdminRead,
  adminDelete,
} from "../controllers/adminAuthController.js";
const adminRouter = express.Router();

adminRouter.post("/adminlogin", adminLoginValidation, adminLogin);
adminRouter.post("/adminsignup", adminSignupValidation, adminSignup);
adminRouter.get("/", AdminRead);
adminRouter.delete("/delete/:id", adminDelete);

export default adminRouter;
