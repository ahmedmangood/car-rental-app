"use client";

import { useEffect, useState } from "react";
import CarGrid from "@/components/CarGrid";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import FeaturesSection from "@/components/FeaturesSection";
import StepsSection from "@/components/StepsSection";
import FactsSection from "@/components/FactsSection";
import MobileAppSection from "@/components/MobileAppSection";
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
    <div className="flex flex-col min-h-screen bg-gray">
      <main className="flex-1 container mx-auto p-6">
        <HeroSection />
        <FeaturesSection />
        <StepsSection />
        <CarGrid cars={carList} />
        <FactsSection />
        <MobileAppSection />
        <SearchSection />
      </main>
    </div>
  );
}
