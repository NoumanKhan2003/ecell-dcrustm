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
      image:imageUrl
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

export { pastEventCreateController };
