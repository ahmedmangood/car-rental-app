import mongoose, { Schema, models, model } from "mongoose";

const CarSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  pricePerDay: { type: Number, required: true },
  image: { type: String },
  available: { type: Boolean, default: true },
  description: { type: String },
});

export default models.Car || model("Car", CarSchema);
