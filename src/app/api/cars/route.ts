import { NextRequest, NextResponse } from "next/server";
import Car from "@/models/Car";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  await connectDB();
  const cars = await Car.find();
  return NextResponse.json(cars);
}

export async function POST(req: NextRequest) {
  await connectDB();
  const data = await req.json();
  const car = await Car.create(data);
  return NextResponse.json(car, { status: 201 });
}
