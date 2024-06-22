import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    frage: { type: String, required: true },
    kategorie: { type: mongoose.Types.ObjectId, ref: "categories", required: true },
    antworten: [
      {
        antwort: { type: String, required: true },
        ergebnis: { type: Boolean, default: false}
      }
    ]
  },
  { collection: "questions", timestamps: true }
);

export const Question = mongoose.model("questions", questionSchema);
