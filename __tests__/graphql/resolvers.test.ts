import { resolvers } from "../../graphql/resolvers";
import { prisma } from "../../prisma/globalPrisma";

// Mock the prisma client
jest.mock("../../prisma/globalPrisma", () => ({
  prisma: {
    prototype_Rehabs: {
      findMany: jest.fn(),
    },
  },
}));

describe("GraphQL Resolvers", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe("adminRehabs", () => {
    it("should return filtered rehabs based on admin filters", async () => {
      // Mock data
      const mockRehabs = [
        { id: 1, name1: "Test Rehab 1", zip: "12345" },
        { id: 2, name1: "Test Rehab 2", zip: "67890" },
      ];

      // Mock the prisma response
      (prisma.prototype_Rehabs.findMany as jest.Mock).mockResolvedValue(
        mockRehabs
      );

      // Test filters
      const filters = {
        name1s: ["Test Rehab 1"],
        zips: ["12345"],
      };

      // Call the resolver
      const result = await resolvers.Query.adminRehabs(null, { filters });

      // Assertions
      expect(result).toEqual(mockRehabs);
      expect(prisma.prototype_Rehabs.findMany).toHaveBeenCalledWith({
        where: {
          name1: { in: ["Test Rehab 1"] },
          zip: { in: ["12345"] },
        },
        skip: 0,
        take: undefined,
      });
    });

    it("should handle pagination correctly", async () => {
      const filters = {
        pagination: {
          offset: 10,
          limit: 5,
        },
      };

      await resolvers.Query.adminRehabs(null, { filters });

      expect(prisma.prototype_Rehabs.findMany).toHaveBeenCalledWith({
        where: {},
        skip: 10,
        take: 5,
      });
    });
  });

  describe("prototypeRehabs", () => {
    it("should return filtered rehabs based on prototype filters", async () => {
      const mockRehabs = [
        { id: 1, name1: "Test Rehab 1", has_wifi: true },
        { id: 2, name1: "Test Rehab 2", has_wifi: false },
      ];

      (prisma.prototype_Rehabs.findMany as jest.Mock).mockResolvedValue(
        mockRehabs
      );

      const filters = {
        has_wifi: true,
        accepts_insurance: true,
      };

      const result = await resolvers.Query.prototypeRehabs(null, { filters });

      expect(result).toEqual(mockRehabs);
      expect(prisma.prototype_Rehabs.findMany).toHaveBeenCalledWith({
        where: {
          has_wifi: true,
          accepts_insurance: true,
        },
        skip: 0,
        take: undefined,
      });
    });

    it("should handle multiple boolean filters correctly", async () => {
      const filters = {
        has_wifi: true,
        pet_friendly: true,
        accepts_medicaid: false,
      };

      await resolvers.Query.prototypeRehabs(null, { filters });

      expect(prisma.prototype_Rehabs.findMany).toHaveBeenCalledWith({
        where: {
          has_wifi: true,
          pet_friendly: true,
          accepts_medicaid: false,
        },
        skip: 0,
        take: undefined,
      });
    });
  });
});
