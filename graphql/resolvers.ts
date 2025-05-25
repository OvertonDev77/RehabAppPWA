import { prisma } from "../prisma/globalPrisma";
import { Prisma } from "@prisma/client";

// Types for pagination
interface PaginationInput {
  offset?: number;
  limit?: number;
}

// Types for admin search
interface AdminRehabFilters {
  name1s?: string[];
  zips?: string[];
  cities?: string[];
  states?: string[];
  npis?: string[];
  pagination?: PaginationInput;
}

// Types for prototype search
interface PrototypeRehabFilters {
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

// Helper function to get pagination params
function getPaginationParams(pagination?: PaginationInput) {
  return {
    skip: pagination?.offset ?? 0,
    take: pagination?.limit ?? undefined,
  };
}

// Helper function to build admin search where clause
function buildAdminWhere(
  filters: AdminRehabFilters
): Prisma.Prototype_RehabsWhereInput {
  const where: Prisma.Prototype_RehabsWhereInput = {};

  if (filters.name1s?.length) {
    where.name1 = { in: filters.name1s };
  }
  if (filters.zips?.length) {
    where.zip = { in: filters.zips };
  }
  if (filters.cities?.length) {
    where.city = { in: filters.cities };
  }
  if (filters.states?.length) {
    where.state = { in: filters.states };
  }
  if (filters.npis?.length) {
    where.npi = { in: filters.npis };
  }

  return where;
}

// Helper function to build prototype search where clause
function buildPrototypeWhere(
  filters: PrototypeRehabFilters
): Prisma.Prototype_RehabsWhereInput {
  const where: Prisma.Prototype_RehabsWhereInput = {};

  // Handle array filters
  if (filters.name1s?.length) {
    where.name1 = { in: filters.name1s };
  }
  if (filters.npis?.length) {
    where.npi = { in: filters.npis };
  }

  // Handle boolean filters - include both true and false values
  const booleanFields = [
    "has_wifi",
    "pet_friendly",
    "family_visitation_allowed",
    "transportation_services",
    "accepts_insurance",
    "accepts_medicaid",
    "wheelchair_accessible",
    "spiritual_programs",
    "holistic_treatments",
    "aftercare_support",
    "alumni_program",
    "smoking_allowed",
    "outdoor_activities",
    "recreational_therapy",
    "art_therapy",
    "music_therapy",
    "equine_therapy",
    "offers_suboxone",
    "has_outings",
    "offers_MAT",
  ] as const;

  booleanFields.forEach((field) => {
    if (filters[field] !== undefined) {
      where[field] = filters[field];
    }
  });

  return where;
}

export const resolvers = {
  Query: {
    // Admin search function
    adminRehabs: async (
      _: unknown,
      { filters = {} }: { filters: AdminRehabFilters }
    ) => {
      const where = buildAdminWhere(filters);
      const { skip, take } = getPaginationParams(filters.pagination);
      return prisma.prototype_Rehabs.findMany({
        where,
        skip,
        take,
      });
    },

    // Prototype search function with boolean filters
    prototypeRehabs: async (
      _: unknown,
      { filters = {} }: { filters: PrototypeRehabFilters }
    ) => {
      const where = buildPrototypeWhere(filters);
      const { skip, take } = getPaginationParams(filters.pagination);
      return prisma.prototype_Rehabs.findMany({
        where,
        skip,
        take,
      });
    },

    // Get single rehab by id or name
  },
};
