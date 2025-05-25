import { useQuery } from "@apollo/client";
import { GET_PROTOTYPE_REHABS, GET_ADMIN_REHABS } from "./rehabQueries";

// Types for our filters
export interface PaginationInput {
  offset?: number;
  limit?: number;
}

export interface PrototypeRehabFilters {
  name1s?: string[];
  npis?: string[];
  has_wifi?: boolean;
  pet_friendly?: boolean;
  family_visitation_allowed?: boolean;
  transportation_services?: boolean;
  accepts_insurance?: boolean;
  accepts_medicaid?: boolean;
  wheelchair_accessible?: boolean;
  spiritual_programs?: boolean;
  holistic_treatments?: boolean;
  aftercare_support?: boolean;
  alumni_program?: boolean;
  smoking_allowed?: boolean;
  outdoor_activities?: boolean;
  recreational_therapy?: boolean;
  art_therapy?: boolean;
  music_therapy?: boolean;
  equine_therapy?: boolean;
  offers_suboxone?: boolean;
  has_outings?: boolean;
  offers_MAT?: boolean;
  pagination?: PaginationInput;
}

export interface AdminRehabFilters {
  name1s?: string[];
  zips?: string[];
  cities?: string[];
  states?: string[];
  npis?: string[];
  pagination?: PaginationInput;
}

// Type for a single rehab
export interface Rehab {
  id: number;
  name1?: string;
  name2?: string;
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  npi?: string;
  has_wifi?: boolean;
  pet_friendly?: boolean;
  family_visitation_allowed?: boolean;
  transportation_services?: boolean;
  accepts_insurance?: boolean;
  accepts_medicaid?: boolean;
  wheelchair_accessible?: boolean;
  spiritual_programs?: boolean;
  holistic_treatments?: boolean;
  aftercare_support?: boolean;
  alumni_program?: boolean;
  smoking_allowed?: boolean;
  outdoor_activities?: boolean;
  recreational_therapy?: boolean;
  art_therapy?: boolean;
  music_therapy?: boolean;
  equine_therapy?: boolean;
  offers_suboxone?: boolean;
  has_outings?: boolean;
  offers_MAT?: boolean;
  staff_to_patient_ratio?: number;
  years_in_operation?: number;
  accreditation?: string;
  licensed_therapists_count?: number;
  average_rating?: number;
  number_of_reviews?: number;
  testimonials?: string;
  virtual_tour_url?: string;
  photos?: string;
  program_details?: string;
  cost_and_payment?: string;
  objective_summary?: string;
  subjective_summary?: string;
  comfort_score?: number;
  nutrition_score?: number;
}

// Hook for fetching prototype rehabs with filters
export function usePrototypeRehabs(filters: PrototypeRehabFilters = {}) {
  const { loading, error, data } = useQuery<{ prototypeRehabs: Rehab[] }>(
    GET_PROTOTYPE_REHABS,
    {
      variables: { filters },
      fetchPolicy: "network-only", // Don't cache the results
    }
  );

  return {
    loading,
    error,
    rehabs: data?.prototypeRehabs || [],
  };
}

// Hook for fetching admin rehabs with filters
export function useAdminRehabs(filters: AdminRehabFilters = {}) {
  return useQuery<{ adminRehabs: Rehab[] }>(GET_ADMIN_REHABS, {
    variables: { filters },
    fetchPolicy: "network-only",
  });
}

// Hook for fetching a single rehab by ID or name

// Example usage:
/*
function RehabList() {
  const { loading, error, data } = usePrototypeRehabs({
    has_wifi: true,
    accepts_insurance: true,
    pagination: {
      offset: 0,
      limit: 10
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.prototypeRehabs.map(rehab => (
        <div key={rehab.id}>
          <h2>{rehab.name1}</h2>
          <p>{rehab.city}, {rehab.state}</p>
        </div>
      ))}
    </div>
  );
}
*/
