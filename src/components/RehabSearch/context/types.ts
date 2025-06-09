import { Rehab } from "@/hooks/apolloHooks/rehabHooks";
import React from "react";

export type FilterCategoryKey =
  | "amenities"
  | "levelsOfCare"
  | "conditions"
  | "treatments"
  | "insuranceProviders"
  | "clienteles"
  | "settings"
  | "approaches"
  | "priceRanges"
  | "countries"
  | "states";

export type FilterSelections = {
  [K in FilterCategoryKey]: string[];
};

export interface RehabSearchContextType {
  selections: FilterSelections;
  setSelections: (s: FilterSelections) => void;
  filterOptions: {
    amenities: string[];
    levelsOfCare: string[];
    conditions: string[];
    treatments: string[];
    insuranceProviders: string[];
    clienteles: string[];
    settings: string[];
    approaches: string[];
    priceRanges: string[];
    countries: string[];
    states: string[];
  };
  selectedRehabs: Rehab[] | [];
  setSelectedRehabs: React.Dispatch<React.SetStateAction<Rehab[]>>;
}

export const FILTER_STATE_TO_INPUT_KEY: Record<FilterCategoryKey, string> = {
  amenities: "amenityNames",
  levelsOfCare: "levelOfCareNames",
  conditions: "conditionNames",
  treatments: "treatmentNames",
  insuranceProviders: "insuranceProviderNames",
  clienteles: "clienteleNames",
  settings: "settingNames",
  approaches: "approachNames",
  priceRanges: "priceRangeLabels",
  countries: "countryNames",
  states: "stateNames",
};
