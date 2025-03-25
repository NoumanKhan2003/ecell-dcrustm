import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
  subTitle: String,
  subContent: String,
});

const PresentEventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    sections: [SectionSchema],
    prize: { type: String },
    registrationType: {
      type: String,
      required: true,
      enum: ["internal", "external"],
    },
    registrationLink: {
      type: String,
      validate: {
        validator: function (value) {
          if (this.registrationType === "external") {
            return value && value.trim() !== "";
          }
          return true;
        },
        message: "Registration link is required for external registration.",
      },
    },
  },
  { timestamps: true }
);

const PresentEventModel = mongoose.model("PresentEvents", PresentEventSchema);

export default PresentEventModel;
