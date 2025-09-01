import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // For JWT, not needed for NextAuth providers
  image: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

export default models.User || model("User", UserSchema);
