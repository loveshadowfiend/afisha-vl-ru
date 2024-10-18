"use client";

import { useCityStore } from "@/stores/cityStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cities } from "@/types/enums";
import { MapPin } from "lucide-react";

export default function CitySelect() {
  const { value, updateCity } = useCityStore();

  const handleSelect = (value: keyof typeof Cities) => {
    const label: string = Cities[value];

    updateCity(value, label);
  };

  return (
    <>
      <Select value={value} onValueChange={handleSelect}>
        <SelectTrigger className="w-max rounded-full shadow-none border-none ring-0 focus:ring-0 flex gap-[5px]">
          <SelectValue placeholder="Город" />
        </SelectTrigger>
        <SelectContent className="shadow-none border-none">
          {Object.entries(Cities).map(([key, value], index) => {
            return (
              <SelectItem key={index} value={key}>
                {value}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
}
