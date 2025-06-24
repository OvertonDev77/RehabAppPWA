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
        console.log("Rehab filter input:", filter);
        const where: any = {};
        if (filter.amenityNames && filter.amenityNames.length > 0) {
          where.amenities = { some: { name: { in: filter.amenityNames } } };
        }
        if (filter.levelOfCareNames && filter.levelOfCareNames.length > 0) {
          where.levels_of_care = {
            some: { name: { in: filter.levelOfCareNames } },
          };
        }
        if (filter.conditionNames && filter.conditionNames.length > 0) {
          where.conditions = { some: { name: { in: filter.conditionNames } } };
        }
        if (filter.treatmentNames && filter.treatmentNames.length > 0) {
          where.treatments = { some: { name: { in: filter.treatmentNames } } };
        }
        if (
          filter.insuranceProviderNames &&
          filter.insuranceProviderNames.length > 0
        ) {
          where.insuranceProviders = {
            some: { name: { in: filter.insuranceProviderNames } },
          };
        }
        if (filter.clienteleNames && filter.clienteleNames.length > 0) {
          where.clientele = { some: { name: { in: filter.clienteleNames } } };
        }
        if (filter.settingNames && filter.settingNames.length > 0) {
          where.settings = { some: { name: { in: filter.settingNames } } };
        }
        if (filter.approachNames && filter.approachNames.length > 0) {
          where.approaches = { some: { name: { in: filter.approachNames } } };
        }
        if (filter.priceRangeLabels && filter.priceRangeLabels.length > 0) {
          where.priceRanges = {
            some: { label: { in: filter.priceRangeLabels } },
          };
        }
        if (filter.countryNames && filter.countryNames.length > 0) {
          where.countries = { some: { name: { in: filter.countryNames } } };
        }
        if (filter.stateNames && filter.stateNames.length > 0) {
          where.states = { some: { name: { in: filter.stateNames } } };
        }
        const result = await prisma.rehab.findMany({
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
          take: 100,
        });

        console.log("Results\n", result);
        return result;
      } catch (error) {
        console.error("Prisma error:", error);
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
    reviewsByRehab: async (_: unknown, { rehabId }: { rehabId: number }) => {
      try {
        return await prisma.review.findMany({
          where: { rehabId },
          include: { user: true, rehab: true },
          orderBy: { createdAt: "desc" },
        });
      } catch (error) {
        throw new GraphQlError("Failed to fetch reviews", "REVIEWS_ERROR");
      }
    },
  },
  Mutation: {
    createUser: async (_: unknown, { input }: { input: { name: string } }) => {
      try {
        return await prisma.users.create({ data: { name: input.name } });
      } catch (error) {
        throw new GraphQlError("Failed to create user", "CREATE_USER_ERROR");
      }
    },
    addReview: async (
      _: unknown,
      {
        input,
      }: {
        input: {
          rehabId: number;
          userId: number;
          content: string;
          rating: number;
        };
      }
    ) => {
      try {
        return await prisma.review.create({
          data: {
            rehabId: input.rehabId,
            userId: input.userId,
            content: input.content,
            rating: input.rating,
          },
          include: { user: true, rehab: true },
        });
      } catch (error) {
        throw new GraphQlError("Failed to add review", "ADD_REVIEW_ERROR");
      }
    },
  },
  Rehab: {
    reviews: (parent: any) =>
      prisma.review.findMany({
        where: { rehabId: parent.id },
        include: { user: true },
        orderBy: { createdAt: "desc" },
      }),
    user: (parent: any) =>
      parent.userId
        ? prisma.users.findUnique({ where: { id: parent.userId } })
        : null,
  },
  Review: {
    user: (parent: any) =>
      prisma.users.findUnique({ where: { id: parent.userId } }),
    rehab: (parent: any) =>
      prisma.rehab.findUnique({ where: { id: parent.rehabId } }),
  },
  User: {
    reviews: (parent: any) =>
      prisma.review.findMany({ where: { userId: parent.id } }),
    rehabs: (parent: any) =>
      prisma.rehab.findMany({ where: { userId: parent.id } }),
  },
};
