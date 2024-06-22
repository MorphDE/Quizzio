import mongoose from "mongoose";

const userQuestionsSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
    questionId: { type: mongoose.Types.ObjectId, ref: "questions", required: true },
    questionResult: { type: Boolean, required: true}
  },
  { collection: "user-questions", timestamps: true }
);

export const UserQuestion = mongoose.model("user-questions", userQuestionsSchema);
