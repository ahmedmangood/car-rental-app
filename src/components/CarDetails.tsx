"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface Car {
  _id: string;
  name: string;
  brand: string;
  pricePerDay: number;
  image?: string;
  available: boolean;
  description?: string;
  type: string;
  gasolinePerLiter: number;
  mileage: number;
  persons: number;
}

export default function CarDetails({ carId }: { carId: string }) {
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCar() {
      try {
        const res = await axios.get(`/api/cars?id=${carId}`);
        setCar(res.data);
      } catch (err) {
        setCar(null);
      } finally {
        setLoading(false);
      }
    }
    fetchCar();
  }, [carId]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!car)
    return <div className="p-8 text-center text-red-500">Car not found.</div>;

  // Demo gallery images (replace with car.gallery if available)
  const gallery = [
    "/cars/carTest.avif",
    "/cars/carTest.avif",
    "/cars/carTest.avif",
  ];

  // Demo equipment (replace with car.equipment if available)
  const equipment = ["ABS", "Air Bags", "Cruise Control", "Air Conditioner"];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow-md mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Car name, price, image, gallery */}
        <div>
          <h1 className="text-4xl font-bold mb-2">{car.name}</h1>
          <div className="text-2xl font-bold text-[#6C4CF1] mb-2">
            ${car.pricePerDay}{" "}
            <span className="text-base font-normal text-gray-500">/ day</span>
          </div>
          <div className="w-full h-56 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
            {car.image ? (
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={180}
                className="object-contain h-full"
              />
            ) : (
              <Image
                src={"/cars/carTest.avif"}
                alt={"car"}
                width={400}
                height={180}
                className="object-contain h-full"
              />
            )}
          </div>
          <div className="flex gap-6 mb-8">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="w-28 h-20 rounded-lg overflow-hidden bg-gray-200"
              >
                <Image
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  width={112}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right: Technical Specification */}
        <div>
          <h2 className="text-xl font-bold mb-6">Technical Specification</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1">
              <span className="font-semibold">Gear Box</span>
              <span className="text-gray-600">
                {car.type === "auto" ? "Automat" : "Manual"}
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1">
              <span className="font-semibold">Fuel</span>
              <span className="text-gray-600">Petrol</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1">
              <span className="font-semibold">Doors</span>
              <span className="text-gray-600">2</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1">
              <span className="font-semibold">Air Conditioner</span>
              <span className="text-gray-600">Yes</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1">
              <span className="font-semibold">Seats</span>
              <span className="text-gray-600">{car.persons}</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1">
              <span className="font-semibold">Distance</span>
              <span className="text-gray-600">{car.mileage}</span>
            </div>
          </div>
          <button className="w-full py-3 rounded-lg bg-[#6C4CF1] text-white font-semibold text-lg mt-2 mb-8 hover:bg-[#5a3ed1] transition">
            Rent a car
          </button>
        </div>
      </div>
      {/* Car Equipment */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Car Equipment</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {equipment.map((eq, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className=" w-5 h-5 rounded-full bg-[#6C4CF1] text-white flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.629 14.29l-4.243-4.243a1 1 0 111.414-1.414l3.243 3.243 6.243-6.243a1 1 0 111.414 1.414l-6.95 6.95a1 1 0 01-1.414 0z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">{eq}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
