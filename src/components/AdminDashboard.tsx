"use client";
import AdminStats from "./AdminStats";
import AdminCharts from "./AdminCharts";
import AdminOverview from "./AdminOverview";

export default function AdminDashboard() {
  return (
    <main className="max-w-7xl mx-auto p-10">
      <AdminStats />
      <AdminCharts />
      <AdminOverview />
    </main>
  );
}
