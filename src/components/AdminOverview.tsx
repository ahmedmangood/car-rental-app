import React from "react";

export default function AdminOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">New Bookings</h2>
        <div className="text-gray-500">No new bookings.</div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">New Users</h2>
        <div className="text-gray-500">No new users.</div>
      </div>
    </div>
  );
}
