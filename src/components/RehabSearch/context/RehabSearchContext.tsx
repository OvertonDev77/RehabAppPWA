import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
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

type NamedObject = { name: string };
type LabeledObject = { label: string };

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

  const setSelectionsFromQueryObject = useCallback(
    (queryObject: URLSearchParams) => {
      const newSelections = { ...defaultSelections };
      queryObject.forEach((value, key) => {
        if (key in defaultSelections) {
          newSelections[key as keyof FilterSelections] = value
            ? value.split(",")
            : [];
        }
      });
      setSelections(newSelections);
    },
    []
  );

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
      amenities: amenities.map((a: NamedObject) => a.name),
      levelsOfCare: levelsOfCare.map((l: NamedObject) => l.name),
      conditions: conditions.map((c: NamedObject) => c.name),
      treatments: treatments.map((t: NamedObject) => t.name),
      insuranceProviders: insuranceProviders.map((i: NamedObject) => i.name),
      clienteles: clienteles.map((c: NamedObject) => c.name),
      settings: settings.map((s: NamedObject) => s.name),
      approaches: approaches.map((a: NamedObject) => a.name),
      priceRanges: priceRanges.map((p: LabeledObject) => p.label),
      countries: countries.map((c: NamedObject) => c.name),
      states: states.map((s: NamedObject) => s.name),
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

  const contextValue = useMemo(
    () => ({
      selections,
      setSelectionsFromQueryObject,
      setSelections,
      filterOptions,
      selectedRehabs,
      setSelectedRehabs,
    }),
    [
      selections,
      setSelectionsFromQueryObject,
      filterOptions,
      selectedRehabs,
      setSelectedRehabs,
    ]
  );

  return (
    <RehabSearchContext.Provider value={contextValue}>
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
