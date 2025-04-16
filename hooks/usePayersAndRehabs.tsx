import { gql, useQuery } from "@apollo/client";

// Define your queries
export const GET_REHABS = gql`
  query GetRehabs($filters: RehabFilters) {
    rehabs(filters: $filters) {
      id
      name1
      city
      state
      phone
      service_names
    }
  }
`;

export const GET_PAYERS = gql`
  query GetPayers($filters: PayerFilters) {
    payers(filters: $filters) {
      payer_code
      payer_name
      type
      state
    }
  }
`;

// Create custom hooks
export function useRehabs(filters?: any) {
  return useQuery(GET_REHABS, {
    variables: { filters },
  });
}

export function usePayers(filters?: any) {
  return useQuery(GET_PAYERS, {
    variables: { filters },
  });
}
