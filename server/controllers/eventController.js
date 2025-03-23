import pastEventModel from "../models/pastEventModel.js";

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

    res.json({ message: "Past Event deleted successfully", deletedPastEvent: deletePastEvent });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete past event", details: error.message });
  }
};

export { pastEventCreateController, pastEventReadController,pastEventDeleteControllers };
