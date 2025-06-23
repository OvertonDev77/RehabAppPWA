/* eslint-disable */
const { PrismaClient } = require("./generated/index.js");

console.log("STARTING SEED PROCESS");

const prisma = new PrismaClient();

const AMENITIES = [
  "Private Rooms",
  "Pool",
  "Gym",
  "Spa",
  "Pet Friendly",
  "WiFi",
  "Laundry Service",
  "Transportation Service",
  "Outdoor Activities",
  "Gourmet Dining",
  "Meditation Room",
  "Yoga Studio",
  "Family Visitation",
  "Library",
  "Art Studio",
];
const LEVELS_OF_CARE = [
  "Outpatient",
  "Residential",
  "Detox",
  "In-Home",
  "Licensed Primary Mental Health",
];
const CONDITIONS = [
  "Depression",
  "Eating Disorders",
  "Bipolar Disorder",
  "Alcohol Addiction",
  "ADHD",
  "Benzos",
  "Opiates",
  "Chronic Pain",
];
const TREATMENTS = [
  "CBT",
  "DBT",
  "Medication Management",
  "Group Therapy",
  "Trauma Therapy",
  "Mindfulness",
];
const INSURANCE_PROVIDERS = [
  "Aetna",
  "Cigna",
  "BlueCross",
  "United Healthcare",
  "Medicaid",
  "Humana",
  "Kaiser Permanente",
  "Tricare",
];
const CLIENTELE = [
  "Women",
  "Men",
  "Teens",
  "Veterans",
  "Executives",
  "LGBTQ+",
  "Young Adults",
  "Older Adults",
];
const SETTINGS = [
  "Beach",
  "City",
  "Tropical",
  "Country Side",
  "Lakeside",
  "Mountain",
  "Island",
];
const APPROACHES = [
  "Evidence-Based",
  "Twelve-Step",
  "Individual",
  "Holistic",
  "Bio-Medical",
];
const PRICE_RANGES = ["Accepts Insurance", "10,000 and up"];
const COUNTRIES = ["United States", "Canada", "Mexico"];
const STATES = [
  "California",
  "Florida",
  "New York",
  "Texas",
  "Arizona",
  "Colorado",
  "Illinois",
  "Georgia",
];

/**
 * @param {Array} arr
 * @param {number} k
 */
function getRandom(arr, k) {
  const shuffled = arr.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, k);
}

/**
 * @param {any} model
 * @param {Array} values
 * @param {string} uniqueField
 */
async function ensureLookup(model, values, uniqueField) {
  for (const value of values) {
    await model.upsert({
      where: { [uniqueField]: value },
      update: {},
      create: { [uniqueField]: value },
    });
  }
}

async function main() {
  // Populate lookup tables (these use upsert to avoid duplicates)
  await ensureLookup(prisma.amenity, AMENITIES, "name");
  await ensureLookup(prisma.levelOfCare, LEVELS_OF_CARE, "name");
  await ensureLookup(prisma.condition, CONDITIONS, "name");
  await ensureLookup(prisma.treatment, TREATMENTS, "name");
  await ensureLookup(prisma.insuranceProvider, INSURANCE_PROVIDERS, "name");
  await ensureLookup(prisma.clientele, CLIENTELE, "name");
  await ensureLookup(prisma.setting, SETTINGS, "name");
  await ensureLookup(prisma.approach, APPROACHES, "name");
  await ensureLookup(prisma.priceRange, PRICE_RANGES, "label");
  await ensureLookup(prisma.country, COUNTRIES, "name");
  await ensureLookup(prisma.state, STATES, "name");

  // Fetch all lookup IDs
  const amenities = await prisma.amenity.findMany();
  const levelsOfCare = await prisma.levelOfCare.findMany();
  const conditions = await prisma.condition.findMany();
  const treatments = await prisma.treatment.findMany();
  const insuranceProviders = await prisma.insuranceProvider.findMany();
  const clientele = await prisma.clientele.findMany();
  const settings = await prisma.setting.findMany();
  const approaches = await prisma.approach.findMany();
  const priceRanges = await prisma.priceRange.findMany();
  const countries = await prisma.country.findMany();
  const states = await prisma.state.findMany();

  // 0. Delete all current Rehabs
  // Since we are deleting all Rehabs, we do not need to upsert or check for duplicates.
  await prisma.rehab.deleteMany();

  // 1. Select all NPIRehabs where state exists at all
  const npiRehabs = await prisma.nPIRehabs.findMany({
    where: {
      state: { not: null },
    },
    take: 2000, // 2. Limit to 2000
  });

  // Only proceed if exactly 2000 items were found
  if (npiRehabs.length !== 2000) {
    console.error(
      `Expected 2000 NPIRehabs, but found ${npiRehabs.length}. Seeding aborted.`
    );
    return;
  }

  // 3. Map and seed
  // We simply create new Rehab records for each NPIRehabs entry (no upsert needed)
  for (const npi of npiRehabs) {
    // Find the state object for relation
    const stateObj = states.find(function (s) {
      return s.name === npi.state;
    });
    // Default country to United States
    const countryObj = countries.find(function (c) {
      return c.name === "United States";
    });

    await prisma.rehab.create({
      data: {
        name: npi.organization_name,
        address: npi.address || null,
        npi_number: npi.npi_number || null,

        phone: npi.phone || null,
        last_updated_nppes: npi.last_updated || null,
        // Optionally, you can generate a website or leave null
        website: null,
        amenities: {
          connect: getRandom(amenities, 4).map(function (a) {
            return { id: a.id };
          }),
        },
        levels_of_care: {
          connect: getRandom(levelsOfCare, 2).map(function (l) {
            return { id: l.id };
          }),
        },
        conditions: {
          connect: getRandom(conditions, 3).map(function (c) {
            return { id: c.id };
          }),
        },
        treatments: {
          connect: getRandom(treatments, 2).map(function (t) {
            return { id: t.id };
          }),
        },
        insuranceProviders: {
          connect: getRandom(insuranceProviders, 2).map(function (i) {
            return { id: i.id };
          }),
        },
        clientele: {
          connect: getRandom(clientele, 2).map(function (cl) {
            return { id: cl.id };
          }),
        },
        settings: {
          connect: getRandom(settings, 1).map(function (s) {
            return { id: s.id };
          }),
        },
        approaches: {
          connect: getRandom(approaches, 1).map(function (a) {
            return { id: a.id };
          }),
        },
        priceRanges: {
          connect: getRandom(priceRanges, 1).map(function (p) {
            return { id: p.id };
          }),
        },
        countries: countryObj
          ? { connect: [{ id: countryObj.id }] }
          : undefined,
        states: stateObj ? { connect: [{ id: stateObj.id }] } : undefined,
      },
    });
  }
  console.log(
    `Seeded ${npiRehabs.length} rehabs from NPIRehabs and all features.`
  );
}

main()
  .catch(function (e) {
    console.error(e);
    process.exit(1);
  })
  .finally(async function () {
    await prisma.$disconnect();
  });
