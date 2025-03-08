import express from "express";
import blogsUploadValidation from "../middlewares/blogsUploadValidation.js";
import blogsUploadControllers from "../controllers/blogsUploadControllers.js";

const blogsUploadRouter = express.Router();

blogsUploadRouter.post(
  "/upload",
  blogsUploadValidation,
  blogsUploadControllers
);

export default blogsUploadRouter;
