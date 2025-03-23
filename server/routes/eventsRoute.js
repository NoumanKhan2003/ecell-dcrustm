import express from "express";
import { pastEventCreateController, pastEventDeleteControllers, pastEventReadController } from "../controllers/eventController.js";
import { pastEventCreateValidation } from "../middlewares/pastEventValidation.js";
import { uploadPastEventImage } from "../middlewares/multerMiddleware.js";

const eventRouter = express.Router();

eventRouter.post(
  "/createPastEvent",
  uploadPastEventImage,
  pastEventCreateValidation,
  pastEventCreateController
);
eventRouter.get("/",pastEventReadController)
eventRouter.delete("/deletePastEvent/:id",pastEventDeleteControllers)


export default eventRouter;
