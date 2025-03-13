import express from "express";
import { blogsCreateValidation } from "../middlewares/blogsValidation.js";
import {
  blogsCreateControllers,
  blogsReadControllers,
} from "../controllers/blogsControllers.js";
import { uploadImage } from "../middlewares/multerMiddleware.js";
const blogsRouter = express.Router();

blogsRouter.post(
  "/create",
  uploadImage,
  blogsCreateValidation,
  blogsCreateControllers
);
blogsRouter.get("/", blogsReadControllers);
export default blogsRouter ;
