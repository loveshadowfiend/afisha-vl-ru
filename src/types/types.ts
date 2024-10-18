import { Cities } from "./enums";

export type ComboboxOption = {
  value: string;
  label: string;
};

export type EventData = {
  id: string;
  name: string;
  city: string;
  imageURL: string;
  date: Date;
  place: string;
  genres: string[];
};
