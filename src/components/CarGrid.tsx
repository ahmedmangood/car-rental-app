import Link from "next/link";
import CarCard, { Car } from "./CarCard";
import { ArrowRight } from "lucide-react";

export default function CarGrid({ cars }: { cars: Car[] }) {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-black my-10">
          Choose the car that suits you
        </h2>
        <Link
          href="/cars"
          className="text-black flex items-center gap-2 font-semibold hover:opacity-50 transition-opacity"
        >
          View All{" "}
          <span>
            <ArrowRight size={20} />
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </section>
  );
}
