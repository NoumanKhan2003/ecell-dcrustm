import blogsModel from "../models/blogsModel.js";

const blogsCreateControllers = async (req, res) => {
  try {
    const { titleMain, contentMain } = req.body;

    const existingBlog = await blogsModel.findOne({ titleMain });
    if (existingBlog) {
      return res
        .status(409)
        .json({ message: "This Blog already exists", success: false });
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

    let imageUrl = null;
    if (req.file) {
      imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    }

    const newBlog = new blogsModel({
      titleMain,
      contentMain,
      sections: parsedSections,
      image: imageUrl,
    });

    await newBlog.save();

    res.status(201).json({
      message: "Blog uploaded successfully",
      success: true,
      data: newBlog,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export { blogsCreateControllers };
