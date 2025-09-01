import Image from "next/image";
import Link from "next/link";

export type Car = {
  _id: string;
  name: string;
  brand: string;
  pricePerDay: number;
  image?: string;
  description?: string;
};

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
      <div className="w-full h-40 relative mb-3">
        <Image
          src={car.image || "/cars/carTest.avif"}
          alt={car.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-lg font-bold mb-1 text-purple-700">
        {car.brand} {car.name}
      </h3>
      <p className="text-gray-600 mb-2 text-center">{car.description}</p>
      <div className="mt-auto flex justify-between items-center w-full">
        <span className="text-blue-700 font-semibold">
          ${car.pricePerDay}/day
        </span>
        <Link
          href={`/booking?car=${car._id}`}
          className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-xl hover:from-pink-600 hover:to-blue-600 transition-colors"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
