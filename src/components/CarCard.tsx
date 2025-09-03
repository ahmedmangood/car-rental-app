import Image from "next/image";
import Link from "next/link";
// import { Car } from "./CarCard";
import { Snowflake, Wallet, Settings } from "lucide-react";

export type Car = {
  _id: string;
  name: string;
  brand: string;
  pricePerDay: number;
  image?: string;
  description?: string;
  type?: string;
};

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2 min-h-[320px] justify-between">
      <div className="w-full h-32 relative mb-2 flex items-center justify-center">
        <Image
          src={car.image || "/cars/carTest.avif"}
          alt={car.name}
          fill
          className="object-contain opacity-60 hover:opacity-100 transition-all"
        />
      </div>
      <div className="flex justify-between items-center w-full mb-1">
        <div className="text-lg font-semibold text-black">{car.brand}</div>
        <div className="text-purple-600 font-bold text-base">
          ${car.pricePerDay}
        </div>
      </div>
      <div className="flex justify-between items-center w-full mb-1 font-semibold">
        <div className="text-sm text-black/70">{car.type || car.name}</div>
        <div className="text-xs text-black/50">per day</div>
      </div>
      <div className="flex gap-4 justify-center font-semibold items-center text-xs text-black/80 mb-2">
        <Settings size={16} /> Automat
        <Wallet size={16} /> PB 95
        <Snowflake size={16} /> Air Conditioner
      </div>
      <Link
        href={`/cars/${car._id}`}
        className="w-full mt-auto bg-purple-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-purple-700 transition text-center"
      >
        View Details
      </Link>
    </div>
  );
}
