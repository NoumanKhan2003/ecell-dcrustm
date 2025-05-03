import express from "express";
import { blogsCreateValidation } from "../middlewares/blogsValidation.js";
import {
  blogsCreateControllers,
  blogsReadControllers,
  blogsDeleteControllers,
} from "../controllers/blogsControllers.js";
import { uploadBlogImage } from "../middlewares/multerMiddleware.js";
const blogsRouter = express.Router();

blogsRouter.post(
  "/create",
  uploadBlogImage,
  blogsCreateValidation,
  blogsCreateControllers
);
blogsRouter.get("/", blogsReadControllers);
blogsRouter.delete("/userDelete/:id", blogsDeleteControllers);
export default blogsRouter;
