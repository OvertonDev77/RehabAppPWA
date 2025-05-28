import { gql } from "@apollo/client";

export const GET_REHABS = gql`
  query GetRehabs($filter: RehabFilterInput) {
    rehabs(filter: $filter) {
      id
      name
      address
      description
      website
      amenities {
        name
      }
      levels_of_care {
        name
      }
      conditions {
        name
      }
      treatments {
        name
      }
      insuranceProviders {
        name
      }
      clientele {
        name
      }
      settings {
        name
      }
      approaches {
        name
      }
      priceRanges {
        label
      }
      countries {
        name
      }
      states {
        name
      }
    }
  }
`;

export const GET_AMENITIES = gql`
  query GetAmenities {
    amenities {
      name
    }
  }
`;

export const GET_LEVELS_OF_CARE = gql`
  query GetLevelsOfCare {
    levelsOfCare {
      name
    }
  }
`;

export const GET_CONDITIONS = gql`
  query GetConditions {
    conditions {
      name
    }
  }
`;

export const GET_TREATMENTS = gql`
  query GetTreatments {
    treatments {
      name
    }
  }
`;

export const GET_INSURANCE_PROVIDERS = gql`
  query GetInsuranceProviders {
    insuranceProviders {
      name
    }
  }
`;

export const GET_CLIENTELES = gql`
  query GetClienteles {
    clienteles {
      name
    }
  }
`;

export const GET_SETTINGS = gql`
  query GetSettings {
    settings {
      name
    }
  }
`;

export const GET_APPROACHES = gql`
  query GetApproaches {
    approaches {
      name
    }
  }
`;

export const GET_PRICE_RANGES = gql`
  query GetPriceRanges {
    priceRanges {
      label
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
    }
  }
`;

export const GET_STATES = gql`
  query GetStates {
    states {
      name
    }
  }
`;
