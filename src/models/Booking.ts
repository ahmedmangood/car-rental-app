import mongoose, { Schema, models, model } from "mongoose";

const BookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  car: { type: Schema.Types.ObjectId, ref: "Car", required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
  paymentIntentId: { type: String },
  location: { type: String, required: true },
});

export default models.Booking || model("Booking", BookingSchema);
