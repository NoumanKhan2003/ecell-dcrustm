import express from "express";
import {
  addEventRegisterFormController,
  eventRegistrationForms,
  pastEventCreateController,
  pastEventDeleteControllers,
  pastEventReadController,
  presentEventCreateController,
  presentEventDeleteControllers,
  presentEventReadController,
  toggleRegistrationController,
} from "../controllers/eventController.js";
import {
  eventRegisterFormCreateValidation,
  pastEventCreateValidation,
  presentEventCreateValidation,
} from "../middlewares/eventValidation.js";
import {
  uploadEventRegisterImage,
  uploadPastEventImage,
  uploadPresentEventImage,
} from "../middlewares/multerMiddleware.js";

const eventRouter = express.Router();

eventRouter.post(
  "/createPastEvent",
  uploadPastEventImage,
  pastEventCreateValidation,
  pastEventCreateController
);
eventRouter.get("/pastEvents", pastEventReadController);
eventRouter.delete("/deletePastEvent/:id", pastEventDeleteControllers);

eventRouter.post(
  "/createPresentEvent",
  uploadPresentEventImage,
  presentEventCreateValidation,
  presentEventCreateController
);
eventRouter.get("/presentEvents", presentEventReadController);
eventRouter.delete("/deletePresentEvent/:id", presentEventDeleteControllers);
eventRouter.post("/toggleRegistration/:id", toggleRegistrationController);

eventRouter.post(
  "/addEventRegisterForm",
  uploadEventRegisterImage,
  eventRegisterFormCreateValidation,
  addEventRegisterFormController
);
eventRouter.get("/eventRegistrationForms", eventRegistrationForms);

export default eventRouter;
