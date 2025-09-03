import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { PrimaryButton } from "./ui/primary-button";
import { Car } from "./CarCard";

const carSchema = z.object({
  name: z.string().min(2),
  brand: z.string().min(2),
  pricePerDay: z.number().min(0),
  image: z.string().url().optional().or(z.literal("")),
  type: z.enum(["auto", "manual"]),
  gasolinePerLiter: z.number().min(0),
  mileage: z.number().min(0),
  persons: z.number().min(1),
  description: z.string().optional(),
});

type CarFormValues = z.infer<typeof carSchema>;

export default function AddCarForm({
  onAdd,
  car,
  onCancel,
}: {
  onAdd: () => void;
  car: Car | null;
  onCancel: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CarFormValues>({
    resolver: zodResolver(carSchema),
    defaultValues: {
      name: "",
      brand: "",
      pricePerDay: 0,
      image: "",
      type: "auto",
      gasolinePerLiter: 0,
      mileage: 0,
      persons: 1,
      description: "",
    },
  });

  async function onSubmit(data: CarFormValues) {
    await axios.post("/api/cars", data);
    reset();
    onAdd();
  }

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={handleSubmit(() => onSubmit)}
    >
      <Input {...register("name")} placeholder="Car Name" />
      <Input {...register("brand")} placeholder="Brand" />
      <Input
        {...register("pricePerDay")}
        placeholder="Price Per Day"
        type="number"
        min={0}
      />
      <Input {...register("image")} placeholder="Image URL" />
      <Select {...register("type")} defaultValue="auto">
        <SelectContent>
          <SelectItem value="auto">Automat</SelectItem>
          <SelectItem value="manual">Manual</SelectItem>
        </SelectContent>
      </Select>
      <Input
        {...register("gasolinePerLiter")}
        placeholder="Gasoline/Liter"
        type="number"
        min={0}
      />
      <Input
        {...register("mileage")}
        placeholder="Mileage"
        type="number"
        min={0}
      />
      <Input
        {...register("persons")}
        placeholder="Persons"
        type="number"
        min={1}
      />
      <Textarea
        {...register("description")}
        placeholder="Description"
        className="md:col-span-2"
      />
      <div className="md:col-span-2 flex gap-4 items-center mt-2">
        <PrimaryButton
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          Add Car
        </PrimaryButton>
        {Object.keys(errors).length > 0 && (
          <span className="text-red-500 text-sm">
            Please fix the errors above.
          </span>
        )}
      </div>
    </form>
  );
}
