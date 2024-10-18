import { Cities } from "@/types/enums";
import { create } from "zustand";

type CityState = {
  value: keyof typeof Cities;
  label: string;
};

type CityActions = {
  updateCity: (value: keyof typeof Cities, label: string) => void;
};

type CityStore = CityState & CityActions;

export const useCityStore = create<CityStore>((set) => {
  return {
    value: "vladivostok",
    label: "Владивосток",

    updateCity: (value: keyof typeof Cities, label: string) => {
      set(() => {
        return { value: value, label: label };
      });
    },
  };
});
