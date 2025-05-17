import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
  questionId:String,
  question:String,
  answer: mongoose.Schema.Types.Mixed,
});

const eventRegistrationDataSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  },
  eventTitle: {
    type: String,
  },
  responses: [responseSchema],
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});
const eventRegistrationUserModel = mongoose.model("eventRegisteredUser", eventRegistrationDataSchema);

export default eventRegistrationUserModel;
