import { useQuery } from "@apollo/client";
import {
  GET_REHABS,
  GET_AMENITIES,
  GET_LEVELS_OF_CARE,
  GET_CONDITIONS,
  GET_TREATMENTS,
  GET_INSURANCE_PROVIDERS,
  GET_CLIENTELES,
  GET_SETTINGS,
  GET_APPROACHES,
  GET_PRICE_RANGES,
  GET_COUNTRIES,
  GET_STATES,
} from "./rehabQueries";

export interface RehabFilterInput {
  amenityNames?: string[];
  levelOfCareNames?: string[];
  conditionNames?: string[];
  treatmentNames?: string[];
  insuranceProviderNames?: string[];
  clienteleNames?: string[];
  settingNames?: string[];
  approachNames?: string[];
  priceRangeLabels?: string[];
  countryNames?: string[];
  stateNames?: string[];
}

export function useRehabs(filter: RehabFilterInput = {}) {
  const { loading, error, data } = useQuery(GET_REHABS, {
    variables: { filter },
    fetchPolicy: "network-only",
  });
  return {
    loading,
    error,
    rehabs: data?.rehabs || [],
  };
}

export function useAmenities() {
  const { loading, error, data } = useQuery(GET_AMENITIES);
  return { loading, error, amenities: data?.amenities || [] };
}

export function useLevelsOfCare() {
  const { loading, error, data } = useQuery(GET_LEVELS_OF_CARE);
  return { loading, error, levelsOfCare: data?.levelsOfCare || [] };
}

export function useConditions() {
  const { loading, error, data } = useQuery(GET_CONDITIONS);
  return { loading, error, conditions: data?.conditions || [] };
}

export function useTreatments() {
  const { loading, error, data } = useQuery(GET_TREATMENTS);
  return { loading, error, treatments: data?.treatments || [] };
}

export function useInsuranceProviders() {
  const { loading, error, data } = useQuery(GET_INSURANCE_PROVIDERS);
  return { loading, error, insuranceProviders: data?.insuranceProviders || [] };
}

export function useClienteles() {
  const { loading, error, data } = useQuery(GET_CLIENTELES);
  return { loading, error, clienteles: data?.clienteles || [] };
}

export function useSettings() {
  const { loading, error, data } = useQuery(GET_SETTINGS);
  return { loading, error, settings: data?.settings || [] };
}

export function useApproaches() {
  const { loading, error, data } = useQuery(GET_APPROACHES);
  return { loading, error, approaches: data?.approaches || [] };
}

export function usePriceRanges() {
  const { loading, error, data } = useQuery(GET_PRICE_RANGES);
  return { loading, error, priceRanges: data?.priceRanges || [] };
}

export function useCountries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  return { loading, error, countries: data?.countries || [] };
}

export function useStates() {
  const { loading, error, data } = useQuery(GET_STATES);
  return { loading, error, states: data?.states || [] };
}
