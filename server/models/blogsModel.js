import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const BlogsSchema = new mongoose.Schema(
  {
    titleMain: { type: String, required: true },
    contentMain: { type: String, required: true },
    image: { type: String, default: "", required: true },
    sections: { type: [SectionSchema], required: true },
  },
  { timestamps: true }
);

const blogsModel = mongoose.model("Blogs", BlogsSchema);

export default blogsModel;
