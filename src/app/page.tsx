"use client";

import { useEffect, useState } from "react";
import CarGrid from "@/components/CarGrid";
import type { Car } from "@/components/CarCard";
import { defaultCarList } from "@/data";

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then(setCars);
  }, []);

  const carList = cars.length === 0 ? defaultCarList : cars;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400">
      <main className="flex-1 container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-6 text-white drop-shadow">
          Available Cars
        </h2>
        <CarGrid cars={carList} />
      </main>
    </div>
  );
}
