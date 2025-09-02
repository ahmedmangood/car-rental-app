import mongoose, { Schema, models, model } from "mongoose";

const CarSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  pricePerDay: { type: Number, required: true },
  image: { type: String },
  available: { type: Boolean, default: true },
  description: { type: String },
  type: { type: String, enum: ["auto", "manual"], default: "auto" },
  gasolinePerLiter: { type: Number, required: true },
  mileage: { type: Number, required: true },
  persons: { type: Number, required: true },
});

export default models.Car || model("Car", CarSchema);
