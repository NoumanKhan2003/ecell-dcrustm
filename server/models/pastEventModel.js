import mongoose from "mongoose";

const PastEventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "", required: true },
  },
  { timestamps: true }
);

const pastEventModel = mongoose.model("PastEvents", PastEventSchema);

export default pastEventModel;
