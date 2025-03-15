import blogsModel from "../models/blogsModel.js";
import { v2 as cloudinary } from "cloudinary";
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

    const imageUrl = req.file ? req.file.path : null;

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

const blogsReadControllers = async (req, res) => {
  try {
    const readBlogs = await blogsModel.find();
    res.json(readBlogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};
const blogsDeleteControllers = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Blog ID is required" });
    }

    const deleteBlogs = await blogsModel.findByIdAndDelete(id);
    
    if (!deleteBlogs) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json({ message: "Blog deleted successfully", deletedBlog: deleteBlogs });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog", details: error.message });
  }
};

export { blogsCreateControllers, blogsReadControllers, blogsDeleteControllers };
