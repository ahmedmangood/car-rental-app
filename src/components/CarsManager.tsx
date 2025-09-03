"use client";

import { Car } from "@/types/car";
import axios from "axios";
import { useEffect, useState } from "react";
import { PrimaryButton } from "./ui/primary-button";
import { Pencil, Trash2 } from "lucide-react";
import AddCarForm from "./AddCarForm";

export default function CarsManager() {
  const [cars, setCars] = useState<Car[]>([]);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCars() {
      const res = await axios.get("/api/cars");
      setCars(res.data);
    }
    fetchCars();
  }, [refresh]);

  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this car?")) return;
    await axios.delete(`/api/cars?id=${id}`);
    setRefresh((r) => !r);
  }

  function handleEdit(car: Car) {
    setEditingCar(car);
  }

  function handleCancelEdit() {
    setEditingCar(null);
  }

  function handleAddedOrEdited() {
    setEditingCar(null);
    setRefresh((r) => !r);
  }

  return (
    <section className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6 text-[#6C4CF1]">Car Management</h2>
      <div className="mb-10">
        <AddCarForm
          onAdd={handleAddedOrEdited}
          car={editingCar}
          onCancel={handleCancelEdit}
        />
      </div>
      <h2 className="text-xl font-bold mb-4 text-[#6C4CF1]">All Cars</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-[#F5A524] text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Brand</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Price/Day</th>
              <th className="py-3 px-4 text-left">Persons</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-6 text-center text-gray-400">
                  No cars found.
                </td>
              </tr>
            ) : (
              cars.map((car) => (
                <tr key={car._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 font-semibold">{car.name}</td>
                  <td className="py-2 px-4">{car.brand}</td>
                  <td className="py-2 px-4">
                    {car.type === "auto" ? "Automat" : "Manual"}
                  </td>
                  <td className="py-2 px-4 text-[#6C4CF1] font-bold">
                    ${car.pricePerDay}
                  </td>
                  <td className="py-2 px-4">{car.persons}</td>
                  <td className="py-2 px-4 flex gap-2">
                    <PrimaryButton
                      className="border border-[#6C4CF1] text-[#6C4CF1] bg-white hover:bg-[#f3f0ff] px-3 py-1"
                      style={{ minWidth: 36 }}
                      onClick={() => handleEdit(car)}
                    >
                      <Pencil size={16} />
                    </PrimaryButton>
                    <PrimaryButton
                      className="border border-[#F5A524] text-[#F5A524] bg-white hover:bg-[#fff7e6] px-3 py-1"
                      style={{ minWidth: 36 }}
                      onClick={() => handleDelete(car._id)}
                    >
                      <Trash2 size={16} />
                    </PrimaryButton>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
