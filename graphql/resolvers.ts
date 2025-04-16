import { prisma } from "../prisma/globalPrisma";

export const resolvers = {
  Query: {
    rehabs: async (_, { filters = {} }) => {
      const where = {
        ...(filters.city && {
          city: { contains: filters.city, mode: "insensitive" },
        }),
        ...(filters.state && {
          state: { equals: filters.state, mode: "insensitive" },
        }),
        ...(filters.mailing_address && {
          mailing_address: {
            contains: filters.mailing_address,
            mode: "insensitive",
          },
        }),
        ...(filters.name1 && {
          name1: { contains: filters.name1, mode: "insensitive" },
        }),
        ...(filters.name2 && {
          name2: { contains: filters.name2, mode: "insensitive" },
        }),
        ...(filters.phone && { phone: { contains: filters.phone } }),
        ...(filters.service_names && {
          service_names: {
            contains: filters.service_names,
            mode: "insensitive",
          },
        }),
        ...(filters.service_codes && {
          service_codes: { contains: filters.service_codes },
        }),
      };

      return prisma.allRehabs.findMany({ where });
    },
    rehab: (_, { id }) => {
      return prisma.allRehabs.findUnique({
        where: { id },
      });
    },
    payers: async (_, { filters = {} }) => {
      const where = {
        ...(filters.payer_code && {
          payer_code: { contains: filters.payer_code, mode: "insensitive" },
        }),
        ...(filters.payer_name && {
          payer_name: { contains: filters.payer_name, mode: "insensitive" },
        }),
        ...(filters.type && {
          type: { equals: filters.type, mode: "insensitive" },
        }),
        ...(filters.state && {
          state: { equals: filters.state, mode: "insensitive" },
        }),
      };
      return prisma.payer.findMany({ where });
    },
    payer: (_, { payer_code }) => {
      return prisma.payer.findUnique({
        where: { payer_code },
      });
    },

    // New ServiceCode resolvers
    serviceCodes: async (_, { filters = {} }) => {
      const where = {
        ...(filters.number_identifier && {
          number_identifier: { contains: filters.number_identifier },
        }),
        ...(filters.name && {
          name: { contains: filters.name, mode: "insensitive" },
        }),
        ...(filters.unique_identifier && {
          unique_identifier: { equals: filters.unique_identifier },
        }),
      };
      return prisma.serviceCodes.findMany({ where });
    },
    serviceCode: (_, { id }) => {
      return prisma.serviceCodes.findUnique({
        where: { id },
      });
    },
  },
};
