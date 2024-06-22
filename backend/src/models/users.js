import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    vorname: { type: String, required: true },
    nachname: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true, trim: true }, // hash of password (not clear-text!)
    passwordSalt: { type: String, required: true, trim: true },
  },
  { collection: "users", timestamps: true }
);

export const Users = mongoose.model("users", usersSchema);