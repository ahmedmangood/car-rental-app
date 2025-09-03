import React from "react";

export default function AdminStats() {
  // Demo stats, replace with real API data
  const stats = [
    { label: "Total Cars", value: 12 },
    { label: "New Bookings", value: 3 },
    { label: "New Users", value: 2 },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
        >
          <span className="text-3xl font-bold text-[#6C4CF1] mb-2">
            {stat.value}
          </span>
          <span className="text-lg text-gray-700 font-medium">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
