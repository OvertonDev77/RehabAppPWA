import { PrismaClient } from "@prisma/client";

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
const CITIES = [
  ["Los Angeles", "California"],
  ["Miami", "Florida"],
  ["New York", "New York"],
  ["Houston", "Texas"],
  ["Phoenix", "Arizona"],
  ["Denver", "Colorado"],
  ["Chicago", "Illinois"],
  ["Atlanta", "Georgia"],
  ["San Diego", "California"],
  ["Orlando", "Florida"],
  ["Buffalo", "New York"],
  ["Dallas", "Texas"],
  ["Tucson", "Arizona"],
  ["Boulder", "Colorado"],
  ["Springfield", "Illinois"],
  ["Savannah", "Georgia"],
];

const REHAB_PROFILES = [
  [
    "Serenity Shores Recovery",
    "A luxury beachfront facility in Miami offering holistic and evidence-based therapies for adults and young professionals.",
  ],
  [
    "Mountainview Wellness Retreat",
    "Nestled in the Colorado Rockies, this center specializes in trauma therapy and mindfulness for all ages.",
  ],
  [
    "Urban Renewal Center",
    "A modern, city-based rehab in Chicago focused on outpatient and group therapy for working adults.",
  ],
  [
    "Sunrise Pathways",
    "A holistic center in Phoenix with yoga, meditation, and art therapy for women and teens.",
  ],
  [
    "Harbor Light Recovery",
    "A lakeside facility in upstate New York, known for its family visitation and alumni programs.",
  ],
  [
    "Palm Grove Detox",
    "A top-rated detox and residential center in Orlando, Florida, with private rooms and gourmet dining.",
  ],
  [
    "Blue Ridge Healing",
    "A countryside retreat in Georgia offering equine therapy and outdoor activities for veterans and executives.",
  ],
  [
    "Pacific Horizons",
    "A coastal California rehab with a focus on dual diagnosis and evidence-based approaches.",
  ],
  [
    "Tranquil Pines",
    "A serene, in-home and outpatient program in Dallas, Texas, for older adults and couples.",
  ],
  [
    "Lighthouse Recovery",
    "A faith-based, twelve-step program in Houston, Texas, with strong aftercare support.",
  ],
  [
    "Oasis Renewal",
    "A tropical island center in Mexico, specializing in holistic and bio-medical treatments.",
  ],
  [
    "Summit View Center",
    "A mountain facility in Boulder, Colorado, with a focus on young adults and trauma therapy.",
  ],
  [
    "Liberty Wellness",
    "A city-based program in Atlanta, Georgia, for LGBTQ+ and diverse clientele, offering DBT and group therapy.",
  ],
  [
    "Harmony House",
    "A residential rehab in Los Angeles, California, with art studio and music therapy for creative professionals.",
  ],
  [
    "Hope Springs",
    "A family-friendly center in Springfield, Illinois, with alumni and aftercare programs.",
  ],
  [
    "New Dawn Recovery",
    "A holistic and evidence-based center in Tucson, Arizona, with yoga and meditation rooms.",
  ],
  [
    "Riverbend Retreat",
    "A lakeside Illinois facility with private rooms and gourmet nutrition for executives.",
  ],
  [
    "Coastal Serenity",
    "A beachside California rehab with spa, pool, and luxury amenities for adults.",
  ],
  [
    "Freedom Path",
    "A veteran-focused program in Savannah, Georgia, with trauma therapy and mindfulness.",
  ],
  [
    "Bright Future Center",
    "A youth and adolescent program in Buffalo, New York, with group and recreational therapy.",
  ],
];

function getRandom<T>(arr: T[], k: number) {
  const shuffled = arr.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, k);
}

async function ensureLookup(model: any, values: string[], uniqueField: string) {
  for (const value of values) {
    await model.upsert({
      where: { [uniqueField]: value },
      update: {},
      create: { [uniqueField]: value },
    });
  }
}

async function main() {
  // Populate lookup tables
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

  // Seed rehabs
  for (let i = 0; i < 20; i++) {
    const [name, description] = REHAB_PROFILES[i];
    const [city, stateName] = CITIES[i % CITIES.length];
    const address = `${Math.floor(Math.random() * 900 + 100)} ${
      getRandom(["Main St", "Oak Ave", "Pine Rd", "Maple Blvd"], 1)[0]
    }, ${city}, ${stateName}`;
    const website = `https://${name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/,/g, "")
      .replace(/&/g, "and")}.com`;

    await prisma.rehab.create({
      data: {
        name,
        address,
        description,
        website,
        amenities: {
          connect: getRandom(amenities, 4).map((a) => ({ id: a.id })),
        },
        levels_of_care: {
          connect: getRandom(levelsOfCare, 2).map((l) => ({ id: l.id })),
        },
        conditions: {
          connect: getRandom(conditions, 3).map((c) => ({ id: c.id })),
        },
        treatments: {
          connect: getRandom(treatments, 2).map((t) => ({ id: t.id })),
        },
        insuranceProviders: {
          connect: getRandom(insuranceProviders, 2).map((i) => ({ id: i.id })),
        },
        clientele: {
          connect: getRandom(clientele, 2).map((cl) => ({ id: cl.id })),
        },
        settings: {
          connect: getRandom(settings, 1).map((s) => ({ id: s.id })),
        },
        approaches: {
          connect: getRandom(approaches, 1).map((a) => ({ id: a.id })),
        },
        priceRanges: {
          connect: getRandom(priceRanges, 1).map((p) => ({ id: p.id })),
        },
        countries: {
          connect: getRandom(countries, 1).map((c) => ({ id: c.id })),
        },
        states: { connect: getRandom(states, 1).map((s) => ({ id: s.id })) },
      },
    });
  }
  console.log("Seeded 20 realistic fictional rehabs and all features.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
