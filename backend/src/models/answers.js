import mongoose from "mongoose";

const answersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
  },
  { collection: "answers", timestamps: true }
);

export const Answers = mongoose.model("answers", answersSchema);