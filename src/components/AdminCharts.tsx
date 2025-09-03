import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AdminCharts() {
  // Demo data
  const bookingsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Bookings",
        data: [12, 19, 8, 15, 22, 17],
        backgroundColor: "#6C4CF1",
        borderRadius: 8,
      },
    ],
  };

  const usersData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        label: "Users",
        data: [85, 15],
        backgroundColor: ["#6C4CF1", "#F5A524"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <h3 className="text-lg font-bold mb-4 text-[#6C4CF1]">
          Bookings (Last 6 Months)
        </h3>
        <Bar
          data={bookingsData}
          options={{
            plugins: {
              legend: { display: false },
              title: { display: false },
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: "#6C4CF1" } },
              y: { grid: { color: "#F3F4F6" }, ticks: { color: "#6C4CF1" } },
            },
          }}
          height={220}
        />
      </div>
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <h3 className="text-lg font-bold mb-4 text-[#6C4CF1]">User Status</h3>
        <Doughnut
          data={usersData}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "#6C4CF1",
                  font: { size: 14, weight: "bold" },
                },
              },
            },
          }}
          height={220}
        />
      </div>
    </div>
  );
}
