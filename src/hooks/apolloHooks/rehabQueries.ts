import { gql } from "@apollo/client";

export const GET_PROTOTYPE_REHABS = gql`
  query GetPrototypeRehabs($filters: PrototypeRehabFilters!) {
    prototypeRehabs(filters: $filters) {
      id
      name1
      name2
      street1
      street2
      city
      state
      zip
      phone
      npi
      has_wifi
      pet_friendly
      family_visitation_allowed
      transportation_services
      accepts_insurance
      accepts_medicaid
      wheelchair_accessible
      spiritual_programs
      holistic_treatments
      aftercare_support
      alumni_program
      smoking_allowed
      outdoor_activities
      recreational_therapy
      art_therapy
      music_therapy
      equine_therapy
      offers_suboxone
      has_outings
      offers_MAT
      staff_to_patient_ratio
      years_in_operation
      accreditation
      licensed_therapists_count
      average_rating
      number_of_reviews
      testimonials
      virtual_tour_url
      photos
      program_details
      cost_and_payment
      objective_summary
      subjective_summary
      comfort_score
      nutrition_score
    }
  }
`;

export const GET_ADMIN_REHABS = gql`
  query GetAdminRehabs($filters: AdminRehabFilters!) {
    adminRehabs(filters: $filters) {
      id
      name1
      name2
      street1
      street2
      city
      state
      zip
      phone
      npi
      service_code_info
      service_codes
      service_names
      provider_first_name
      provider_last_name
      mailing_address
      last_update
      health_care_provider_taxonomy_code_one
      health_care_provider_taxonomy_code_two
    }
  }
`;

export const GET_ALL_PAYERS = gql`
  query GetAllPayers {
    allPayers {
      payer_code
      payer_name
      type
      eligibility
      claim_status
      column1
      state
    }
  }
`;
