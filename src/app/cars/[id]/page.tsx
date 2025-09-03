import CarDetails from "@/components/CarDetails";

export default function CarPage({ params }: { params: { id: string } }) {
  return <CarDetails carId={params.id} />;
}
