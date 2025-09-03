export interface Car {
  _id: string;
  name: string;
  brand: string;
  pricePerDay: number;
  image?: string;
  available: boolean;
  description?: string;
  type: "auto" | "manual";
  gasolinePerLiter: number;
  mileage: number;
  persons: number;
}
