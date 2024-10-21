import { Cities } from "@/types/enums";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CityState = {
  value: keyof typeof Cities;
  label: string;
};

export type CityActions = {
  updateCity: (value: keyof typeof Cities, label: string) => void;
};

export type CityStore = CityState & CityActions;

export const useCityStore = create<CityStore>()(
  persist(
    (set) => ({
      value: "vladivostok",
      label: "Владивосток",

      updateCity: (value: keyof typeof Cities, label: string) => {
        set(() => ({ value, label }));
      },
    }),
    {
      name: "afisha-vl-ru-city",
    }
  )
);
