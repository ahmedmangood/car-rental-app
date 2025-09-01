"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        className="bg-white p-8 rounded shadow w-full max-w-md flex flex-col gap-4"
        onSubmit={handleBooking}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Book Car</h2>
        <input
          type="date"
          value={dates.start}
          onChange={(e) => setDates((d) => ({ ...d, start: e.target.value }))}
          required
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={dates.end}
          onChange={(e) => setDates((d) => ({ ...d, end: e.target.value }))}
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Book
        </button>
        {message && <p className="text-green-600 text-sm">{message}</p>}
      </form>
    </div>
  );
}
