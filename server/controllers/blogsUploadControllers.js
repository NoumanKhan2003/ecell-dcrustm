import blogsModel from "../models/blogsUploadModel.js";

const blogsUploadControllers = async (req, res) => {
  try {
    const { titleMain, contentMain, image, sections } = req.body;

    const existingBlog = await blogsModel.findOne({ titleMain });
    if (existingBlog) {
      return res
        .status(409)
        .json({ message: " This Blog already exists", success: false });
    }
    const newBlog = new blogsModel({ titleMain, contentMain, image, sections });
    await newBlog.save();

    res.status(201).json({ message: "Blogs Upload successful", success: true });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export default blogsUploadControllers;
