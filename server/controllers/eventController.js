import pastEventModel from "../models/pastEventModel.js";
import presentEventModel from "../models/presentEventModel.js";
import eventRegisterModel from "../models/eventRegisterModel.js";

const pastEventCreateController = async (req, res) => {
  try {
    const { title, description } = req.body;

    const existingEvent = await pastEventModel.findOne({ title });
    if (existingEvent) {
      return res
        .status(409)
        .json({ message: "This Event already exists", success: false });
    }

    const imageUrl = req.file ? req.file.path : null;

    const newPastEvent = new pastEventModel({
      title,
      description,
      image: imageUrl,
    });

    await newPastEvent.save();

    res.status(201).json({
      message: "Event uploaded successfully",
      success: true,
      data: newPastEvent,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const pastEventReadController = async (_, res) => {
  try {
    const readPastEvents = await pastEventModel.find();
    res.json(readPastEvents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Past Events" });
  }
};

const pastEventDeleteControllers = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Event ID is required" });
    }

    const deletePastEvent = await pastEventModel.findByIdAndDelete(id);

    if (!deletePastEvent) {
      return res.status(404).json({ error: "Past Event not found" });
    }

    res.json({
      message: "Past Event deleted successfully",
      deletedPastEvent: deletePastEvent,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete past event", details: error.message });
  }
};

const presentEventCreateController = async (req, res) => {
  try {
    const { title, description, prize, registrationType, registrationLink } =
      req.body;

    const existingEvent = await presentEventModel.findOne({ title });
    if (existingEvent) {
      return res
        .status(409)
        .json({ message: "This Event already exists", success: false });
    }

    let parsedSections = [];
    if (req.body.sections) {
      try {
        parsedSections = JSON.parse(req.body.sections);
        if (!Array.isArray(parsedSections)) {
          return res.status(400).json({ message: "sections must be an array" });
        }
      } catch (error) {
        return res.status(400).json({ message: "Invalid sections format." });
      }
    }
    const imageUrl = req.file ? req.file.path : null;

    const newPresentEvent = new presentEventModel({
      title,
      description,
      image: imageUrl,
      sections: parsedSections,
      registrationType,
    });
    if (registrationType === "external") {
      newPresentEvent.registrationLink = registrationLink;
    }
    if (registrationType === "internal") {
      newPresentEvent.registrationLink = registrationLink;
    }
    if (prize) {
      newPresentEvent.prize = prize;
    }

    await newPresentEvent.save();

    res.status(201).json({
      message: "Event uploaded successfully",
      success: true,
      data: newPresentEvent,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const presentEventReadController = async (_, res) => {
  try {
    const readPresentEvents = await presentEventModel.find();
    res.json(readPresentEvents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Past Events" });
  }
};

const presentEventDeleteControllers = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Event ID is required" });
    }

    const deletePresentEvent = await presentEventModel.findByIdAndDelete(id);

    if (!deletePresentEvent) {
      return res.status(404).json({ error: "Present Event not found" });
    }

    res.json({
      message: "Present Event deleted successfully",
      deletedPresentEvent: deletePresentEvent,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete Present event",
      details: error.message,
    });
  }
};

const toggleRegistrationController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Event ID is required" });
    }

    const togglePresentEvent = await presentEventModel.findById(id);

    if (!togglePresentEvent) {
      return res.status(404).json({ error: "Present Event not found" });
    }
    togglePresentEvent.registrationStatus =
      togglePresentEvent.registrationStatus === "open" ? "close" : "open";
    await togglePresentEvent.save();
    res.json({
      message: "Registration status updated",
      status: togglePresentEvent,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update registration status" });
  }
};

const addEventRegisterFormController = async (req, res) => {
  try {
    const { eventTitle, eventDescription, questions } = req.body;

    const existingForm = await eventRegisterModel.findOne({ eventTitle });
    if (existingForm) {
      return res
        .status(409)
        .json({ message: "This form title already exists!", success: false });
    }

    const thumbnailPath = req.file ? req.file.path : null;

    const parsedQuestions =
      typeof questions === "string" ? JSON.parse(questions) : questions;

    const newForm = new eventRegisterModel({
      eventTitle,
      eventDescription,
      thumbnailPath,
      questions: parsedQuestions,
    });

    await newForm.save();

    res.status(201).json({
      message: "Form created successfully",
      success: true,
      data: newForm,
    });
  } catch (err) {
    console.error("Error saving form:", err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};

const eventRegistrationForms = async (_, res) => {
  try {
    const eventRegistrationForm = await eventRegisterModel.find();
    res.json(eventRegistrationForm);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Event Registration Forms" });
  }
};

export {
  pastEventCreateController,
  pastEventReadController,
  pastEventDeleteControllers,
  presentEventCreateController,
  presentEventReadController,
  presentEventDeleteControllers,
  toggleRegistrationController,
  addEventRegisterFormController,
  eventRegistrationForms,
};
