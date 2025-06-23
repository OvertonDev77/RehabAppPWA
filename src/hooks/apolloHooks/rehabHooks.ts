import { useQuery, useMutation } from "@apollo/client";
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
import { gql } from "@apollo/client";

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
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: false,
  });
  return {
    loading,
    error,
    rehabs: data?.rehabs || [],
  };
}

export function useAmenities() {
  const { loading, error, data } = useQuery(GET_AMENITIES, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, amenities: data?.amenities || [] };
}

export function useLevelsOfCare() {
  const { loading, error, data } = useQuery(GET_LEVELS_OF_CARE, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, levelsOfCare: data?.levelsOfCare || [] };
}

export function useConditions() {
  const { loading, error, data } = useQuery(GET_CONDITIONS, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, conditions: data?.conditions || [] };
}

export function useTreatments() {
  const { loading, error, data } = useQuery(GET_TREATMENTS, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, treatments: data?.treatments || [] };
}

export function useInsuranceProviders() {
  const { loading, error, data } = useQuery(GET_INSURANCE_PROVIDERS, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, insuranceProviders: data?.insuranceProviders || [] };
}

export function useClienteles() {
  const { loading, error, data } = useQuery(GET_CLIENTELES, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, clienteles: data?.clienteles || [] };
}

export function useSettings() {
  const { loading, error, data } = useQuery(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, settings: data?.settings || [] };
}

export function useApproaches() {
  const { loading, error, data } = useQuery(GET_APPROACHES, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, approaches: data?.approaches || [] };
}

export function usePriceRanges() {
  const { loading, error, data } = useQuery(GET_PRICE_RANGES, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, priceRanges: data?.priceRanges || [] };
}

export function useCountries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, countries: data?.countries || [] };
}

export function useStates() {
  const { loading, error, data } = useQuery(GET_STATES, {
    fetchPolicy: "cache-first",
  });
  return { loading, error, states: data?.states || [] };
}

export interface User {
  id: number;
  name: string;
  rehabs?: Rehab[];
  reviews?: Review[];
}

export interface Review {
  id: number;
  content: string;
  rating: number;
  createdAt: string;
  user: User;
  rehab: Rehab;
}

export interface Rehab {
  id: number;
  name: string;
  address?: string;
  description?: string;
  website?: string;
  amenities?: { name: string }[];
  levels_of_care?: { name: string }[];
  conditions?: { name: string }[];
  treatments?: { name: string }[];
  insuranceProviders?: { name: string }[];
  clientele?: { name: string }[];
  settings?: { name: string }[];
  approaches?: { name: string }[];
  priceRanges?: { label: string }[];
  countries?: { name: string }[];
  states?: { name: string }[];
  reviews?: Review[];
  user?: User;
}

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($input: AddReviewInput!) {
    addReview(input: $input) {
      id
      content
      rating
      createdAt
      user {
        id
        name
      }
      rehab {
        id
        name
      }
    }
  }
`;

export const REVIEWS_BY_REHAB = gql`
  query ReviewsByRehab($rehabId: Int!) {
    reviewsByRehab(rehabId: $rehabId) {
      id
      content
      rating
      createdAt
      user {
        id
        name
      }
      rehab {
        id
        name
      }
    }
  }
`;

export function useCreateUser() {
  return useMutation<{ createUser: User }, { input: { name: string } }>(
    CREATE_USER
  );
}

export function useAddReview() {
  return useMutation<
    { addReview: Review },
    {
      input: {
        rehabId: number;
        userId: number;
        content: string;
        rating: number;
      };
    }
  >(ADD_REVIEW);
}

export function useReviewsByRehab(rehabId: number) {
  return useQuery<{ reviewsByRehab: Review[] }>(REVIEWS_BY_REHAB, {
    variables: { rehabId },
  });
}
