"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCityStore } from "@/stores/cityStore";
import { Cities } from "@/types/enums";

export default function CitySelect() {
  const { value, updateCity } = useCityStore();
  return (
    <Select
      value={value}
      onValueChange={(value: keyof typeof Cities) => {
        updateCity(value, Cities[value]);
      }}
    >
      <SelectTrigger className="p-0 w-max rounded-full shadow-none border-none ring-0 focus:ring-0 flex gap-[5px]">
        <SelectValue placeholder="Город" />
      </SelectTrigger>
      <SelectContent className="border-none w-max">
        {Object.entries(Cities).map(([key, value], index) => {
          return (
            <SelectItem key={index} value={key}>
              {value}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
