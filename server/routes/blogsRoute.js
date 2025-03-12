import express from "express";
import {blogsCreateValidation} from "../middlewares/blogsValidation.js";
import {blogsCreateControllers} from "../controllers/blogsControllers.js";

const blogsRouter = express.Router();

blogsRouter.post(
  "/create",
  blogsCreateValidation,
  blogsCreateControllers
);

export default blogsRouter;
