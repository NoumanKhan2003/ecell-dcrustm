import express from "express";
import { pastEventCreateController } from "../controllers/eventController.js";
import { pastEventCreateValidation } from "../middlewares/pastEventValidation.js";
import { uploadPastEventImage } from "../middlewares/multerMiddleware.js";

const eventRouter = express.Router();

eventRouter.post(
  "/createPastEvent",
  uploadPastEventImage,
  pastEventCreateValidation,
  pastEventCreateController
);

export default eventRouter;
