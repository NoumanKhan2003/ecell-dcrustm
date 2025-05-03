import express from "express";
import {
  userLoginValidation,
  userSignupValidation,
} from "../middlewares/userValidation.js";
import {
  userSignup,
  userLogin,
  userRead,
  userDelete,
  userEdit,
  userReadOne,
} from "../controllers/userAuthController.js";
const userRouter = express.Router();

userRouter.post("/userLogin", userLoginValidation, userLogin);
userRouter.post("/userSignup", userSignupValidation, userSignup);
userRouter.get("/", userRead);
userRouter.delete("/userDelete/:id", userDelete);
userRouter.get("/userReadOne/:id", userReadOne);
userRouter.patch("/userEdit/:id",userEdit)

export default userRouter;
