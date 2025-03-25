import express from "express";
import { pastEventCreateController, pastEventDeleteControllers, pastEventReadController, presentEventCreateController, presentEventDeleteControllers, presentEventReadController } from "../controllers/eventController.js";
import { pastEventCreateValidation, presentEventCreateValidation } from "../middlewares/eventValidation.js";
import { uploadPastEventImage, uploadPresentEventImage } from "../middlewares/multerMiddleware.js";

const eventRouter = express.Router();

eventRouter.post(
  "/createPastEvent",
  uploadPastEventImage,
  pastEventCreateValidation,
  pastEventCreateController
);
eventRouter.get("/pastEvents",pastEventReadController)
eventRouter.delete("/deletePastEvent/:id",pastEventDeleteControllers)

eventRouter.post(
  "/createPresentEvent",
  uploadPresentEventImage,
  presentEventCreateValidation,
  presentEventCreateController
);
eventRouter.get("/presentEvents",presentEventReadController)
eventRouter.delete("/deletePresentEvent/:id",presentEventDeleteControllers)

export default eventRouter;
