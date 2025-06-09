import React, { createContext, useContext, useState, useMemo } from "react";
import { RehabSearchContextType, FilterSelections } from "./types";
import {
  useAmenities,
  useLevelsOfCare,
  useConditions,
  useTreatments,
  useInsuranceProviders,
  useClienteles,
  useSettings,
  useApproaches,
  usePriceRanges,
  useCountries,
  useStates,
  Rehab,
} from "@/hooks/apolloHooks/rehabHooks";

const defaultSelections: FilterSelections = {
  amenities: [],
  levelsOfCare: [],
  conditions: [],
  treatments: [],
  insuranceProviders: [],
  clienteles: [],
  settings: [],
  approaches: [],
  priceRanges: [],
  countries: [],
  states: [],
};

const RehabSearchContext = createContext<RehabSearchContextType | undefined>(
  undefined
);

export const RehabSearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selections, setSelections] =
    useState<FilterSelections>(defaultSelections);

  const [selectedRehabs, setSelectedRehabs] = useState<Rehab[] | []>([]);

  const { amenities } = useAmenities();
  const { levelsOfCare } = useLevelsOfCare();
  const { conditions } = useConditions();
  const { treatments } = useTreatments();
  const { insuranceProviders } = useInsuranceProviders();
  const { clienteles } = useClienteles();
  const { settings } = useSettings();
  const { approaches } = useApproaches();
  const { priceRanges } = usePriceRanges();
  const { countries } = useCountries();
  const { states } = useStates();

  const filterOptions = useMemo(
    () => ({
      amenities: amenities.map((a: any) => a.name),
      levelsOfCare: levelsOfCare.map((l: any) => l.name),
      conditions: conditions.map((c: any) => c.name),
      treatments: treatments.map((t: any) => t.name),
      insuranceProviders: insuranceProviders.map((i: any) => i.name),
      clienteles: clienteles.map((c: any) => c.name),
      settings: settings.map((s: any) => s.name),
      approaches: approaches.map((a: any) => a.name),
      priceRanges: priceRanges.map((p: any) => p.label),
      countries: countries.map((c: any) => c.name),
      states: states.map((s: any) => s.name),
    }),
    [
      amenities,
      levelsOfCare,
      conditions,
      treatments,
      insuranceProviders,
      clienteles,
      settings,
      approaches,
      priceRanges,
      countries,
      states,
    ]
  );

  return (
    <RehabSearchContext.Provider
      value={{
        selections,
        setSelections,
        filterOptions,
        selectedRehabs,
        setSelectedRehabs,
      }}
    >
      {children}
    </RehabSearchContext.Provider>
  );
};

export const useRehabSearchContext = () => {
  const ctx = useContext(RehabSearchContext);
  if (!ctx)
    throw new Error(
      "useRehabSearchContext must be used within RehabSearchProvider"
    );
  return ctx;
};
