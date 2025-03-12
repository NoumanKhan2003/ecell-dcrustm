import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
  subTitle: String,
  subContent: String,
});

const BlogsSchema = new mongoose.Schema(
  {
    titleMain: { type: String, required: true },
    contentMain: { type: String, required: true },
    image: { type: String, default: "", required: true },
    sections: [SectionSchema],
  },
  { timestamps: true }
);

const blogsModel = mongoose.model("Blogs", BlogsSchema);

export default blogsModel;
