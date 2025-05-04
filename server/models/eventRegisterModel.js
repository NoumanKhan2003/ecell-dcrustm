import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  value: String,
});

const questionSchema = new mongoose.Schema({
  question: String,
  type: String,
  options: [String],
  required: Boolean,
});

const eventFormSchema = new mongoose.Schema({
  eventTitle: { type: String, required: true },
  eventDescription: { type: String },
  thumbnailPath: { type: String },
  questions: [questionSchema],
}, { timestamps: true });

const eventRegisterModel = mongoose.model("EventForm", eventFormSchema);

export default eventRegisterModel;