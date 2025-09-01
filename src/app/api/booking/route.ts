import { NextRequest, NextResponse } from "next/server";
import Booking from "@/models/Booking";
import { connectDB } from "@/lib/mongodb";

export async function GET(req: NextRequest) {
  await connectDB();
  const bookings = await Booking.find().populate("car").populate("user");
  return NextResponse.json(bookings);
}

export async function POST(req: NextRequest) {
  await connectDB();
  const data = await req.json();
  const booking = await Booking.create(data);
  return NextResponse.json(booking, { status: 201 });
}
