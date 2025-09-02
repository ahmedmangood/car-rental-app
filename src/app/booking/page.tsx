"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  const params = useSearchParams();
  const carId = params.get("car");
  const [dates, setDates] = useState({ start: "", end: "" });
  const [message, setMessage] = useState("");

  async function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        car: carId,
        startDate: dates.start,
        endDate: dates.end,
      }),
    });
    if (res.ok) setMessage("Booking successful!");
    else setMessage("Booking failed.");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50"></div>
  );
}
