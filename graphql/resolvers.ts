import { PrismaClient } from "@prisma/client";
import { GraphQlError } from "./errors";

const prisma = new PrismaClient();

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

export const resolvers = {
  Query: {
    rehabs: async (
      _: unknown,
      { filter = {} }: { filter: RehabFilterInput }
    ) => {
      try {
        const where: any = {};
        if (filter.amenityNames) {
          where.amenities = { some: { name: { in: filter.amenityNames } } };
        }
        if (filter.levelOfCareNames) {
          where.levels_of_care = {
            some: { name: { in: filter.levelOfCareNames } },
          };
        }
        if (filter.conditionNames) {
          where.conditions = { some: { name: { in: filter.conditionNames } } };
        }
        if (filter.treatmentNames) {
          where.treatments = { some: { name: { in: filter.treatmentNames } } };
        }
        if (filter.insuranceProviderNames) {
          where.insuranceProviders = {
            some: { name: { in: filter.insuranceProviderNames } },
          };
        }
        if (filter.clienteleNames) {
          where.clientele = { some: { name: { in: filter.clienteleNames } } };
        }
        if (filter.settingNames) {
          where.settings = { some: { name: { in: filter.settingNames } } };
        }
        if (filter.approachNames) {
          where.approaches = { some: { name: { in: filter.approachNames } } };
        }
        if (filter.priceRangeLabels) {
          where.priceRanges = {
            some: { label: { in: filter.priceRangeLabels } },
          };
        }
        if (filter.countryNames) {
          where.countries = { some: { name: { in: filter.countryNames } } };
        }
        if (filter.stateNames) {
          where.states = { some: { name: { in: filter.stateNames } } };
        }
        return await prisma.rehab.findMany({
          where,
          include: {
            amenities: true,
            levels_of_care: true,
            conditions: true,
            treatments: true,
            insuranceProviders: true,
            clientele: true,
            settings: true,
            approaches: true,
            priceRanges: true,
            countries: true,
            states: true,
          },
        });
      } catch (error) {
        throw new GraphQlError("Failed to fetch rehabs", "REHABS_ERROR");
      }
    },
    amenities: async () => {
      try {
        return await prisma.amenity.findMany();
      } catch {
        throw new GraphQlError("Failed to fetch amenities", "AMENITIES_ERROR");
      }
    },
    levelsOfCare: async () => {
      try {
        return await prisma.levelOfCare.findMany();
      } catch {
        throw new GraphQlError(
          "Failed to fetch levels of care",
          "LEVELS_OF_CARE_ERROR"
        );
      }
    },
    conditions: async () => {
      try {
        return await prisma.condition.findMany();
      } catch {
        throw new GraphQlError(
          "Failed to fetch conditions",
          "CONDITIONS_ERROR"
        );
      }
    },
    treatments: async () => {
      try {
        return await prisma.treatment.findMany();
      } catch {
        throw new GraphQlError(
          "Failed to fetch treatments",
          "TREATMENTS_ERROR"
        );
      }
    },
    insuranceProviders: async () => {
      try {
        return await prisma.insuranceProvider.findMany();
      } catch {
        throw new GraphQlError(
          "Failed to fetch insurance providers",
          "INSURANCE_PROVIDERS_ERROR"
        );
      }
    },
    clienteles: async () => {
      try {
        return await prisma.clientele.findMany();
      } catch {
        throw new GraphQlError(
          "Failed to fetch clienteles",
          "CLIENTELES_ERROR"
        );
      }
    },
    settings: async () => {
      try {
        return await prisma.setting.findMany();
      } catch {
        throw new GraphQlError("Failed to fetch settings", "SETTINGS_ERROR");
      }
    },
    approaches: async () => {
      try {
        return await prisma.approach.findMany();
      } catch {
        throw new GraphQlError(
          "Failed to fetch approaches",
          "APPROACHES_ERROR"
        );
      }
    },
    priceRanges: async () => {
      try {
        return await prisma.priceRange.findMany();
      } catch {
        throw new GraphQlError(
          "Failed to fetch price ranges",
          "PRICE_RANGES_ERROR"
        );
      }
    },
    countries: async () => {
      try {
        return await prisma.country.findMany();
      } catch {
        throw new GraphQlError("Failed to fetch countries", "COUNTRIES_ERROR");
      }
    },
    states: async () => {
      try {
        return await prisma.state.findMany();
      } catch {
        throw new GraphQlError("Failed to fetch states", "STATES_ERROR");
      }
    },
  },
};
