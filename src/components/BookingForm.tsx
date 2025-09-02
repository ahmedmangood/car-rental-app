"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar24 } from "./ui/dateAndTime";

const formSchema = z.object({
  carType: z.string().min(1, { message: "Select a car type." }),
  rentalPlace: z.string().min(1, { message: "Select a rental place." }),
  returnPlace: z.string().min(1, { message: "Select a return place." }),
  rentalDate: z.string().min(1, { message: "Select a rental date." }),
  returnDate: z.string().min(1, { message: "Select a return date." }),
});

export default function BookingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      carType: "",
      rentalPlace: "",
      returnPlace: "",
      rentalDate: "",
      returnDate: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Type-safe and validated
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-xl font-bold mb-6 text-center text-black">
          Book your car
        </h2>
        <FormField
          control={form.control}
          name="carType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Car type</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue bg-white text-black appearance-none"
                >
                  <option value="" disabled>
                    Car type
                  </option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="convertible">Convertible</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rentalPlace"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Place of rental</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue bg-white text-black appearance-none"
                >
                  <option value="" disabled>
                    Place of rental
                  </option>
                  <option value="cairo">Cairo</option>
                  <option value="alex">Alexandria</option>
                  <option value="giza">Giza</option>
                  <option value="luxor">Luxor</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="returnPlace"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Place of return</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue bg-white text-black appearance-none"
                >
                  <option value="" disabled>
                    Place of return
                  </option>
                  <option value="cairo">Cairo</option>
                  <option value="alex">Alexandria</option>
                  <option value="giza">Giza</option>
                  <option value="luxor">Luxor</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Calendar24 />
        </div>
        <div className="flex gap-2">
          <Calendar24 />
        </div>
        <Button
          type="submit"
          className="w-full bg-yellow text-white font-semibold py-3 rounded-lg shadow hover:bg-yellow/90 transition"
        >
          Book now
        </Button>
      </form>
    </Form>
  );
}
