"use client";

import * as React from "react";
import { Search, MapPin, Star, Phone, Globe, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Mock rehab data
const mockRehabs = [
  {
    id: 1,
    name: "Serenity Springs Recovery Center",
    location: "Malibu, CA",
    rating: 4.8,
    reviewCount: 127,
    phone: "(555) 123-4567",
    website: "www.serenitysprings.com",
    image: "/placeholder.svg?height=200&width=300",
    treatmentTypes: ["Inpatient", "Detox", "Therapy"],
    amenities: ["Pool", "Gym", "Spa", "Private Rooms"],
    insuranceAccepted: ["Blue Cross", "Aetna", "Cigna"],
    specialties: ["Alcohol", "Opioids", "Dual Diagnosis"],
    description:
      "A luxury rehabilitation center offering comprehensive addiction treatment in a serene coastal setting.",
  },
  {
    id: 2,
    name: "Mountain View Treatment Facility",
    location: "Denver, CO",
    rating: 4.6,
    reviewCount: 89,
    phone: "(555) 987-6543",
    website: "www.mountainviewtreatment.com",
    image: "/placeholder.svg?height=200&width=300",
    treatmentTypes: ["Outpatient", "Intensive Outpatient", "Therapy"],
    amenities: ["Gym", "Meditation Room", "Group Therapy Rooms"],
    insuranceAccepted: ["United Healthcare", "Blue Cross", "Medicare"],
    specialties: ["Alcohol", "Cocaine", "Prescription Drugs"],
    description:
      "Evidence-based treatment programs with stunning mountain views and holistic healing approaches.",
  },
  {
    id: 3,
    name: "Coastal Recovery Institute",
    location: "Miami, FL",
    rating: 4.7,
    reviewCount: 156,
    phone: "(555) 456-7890",
    website: "www.coastalrecovery.com",
    image: "/placeholder.svg?height=200&width=300",
    treatmentTypes: ["Inpatient", "Outpatient", "Detox"],
    amenities: ["Beach Access", "Pool", "Spa", "Private Rooms", "Gym"],
    insuranceAccepted: ["Aetna", "Cigna", "Humana"],
    specialties: ["Alcohol", "Heroin", "Dual Diagnosis", "Trauma"],
    description:
      "Beachfront rehabilitation center specializing in trauma-informed care and addiction recovery.",
  },
  {
    id: 4,
    name: "Pine Valley Wellness Center",
    location: "Portland, OR",
    rating: 4.5,
    reviewCount: 73,
    phone: "(555) 321-0987",
    website: "www.pinevalleywellness.com",
    image: "/placeholder.svg?height=200&width=300",
    treatmentTypes: ["Outpatient", "Intensive Outpatient", "Therapy"],
    amenities: ["Meditation Room", "Art Therapy Studio", "Garden"],
    insuranceAccepted: ["Blue Cross", "United Healthcare", "Medicaid"],
    specialties: ["Alcohol", "Marijuana", "Prescription Drugs"],
    description:
      "Holistic treatment approach combining traditional therapy with alternative healing methods.",
  },
  {
    id: 5,
    name: "Desert Oasis Recovery",
    location: "Phoenix, AZ",
    rating: 4.9,
    reviewCount: 201,
    phone: "(555) 654-3210",
    website: "www.desertoasisrecovery.com",
    image: "/placeholder.svg?height=200&width=300",
    treatmentTypes: ["Inpatient", "Detox", "Intensive Outpatient"],
    amenities: ["Pool", "Spa", "Private Rooms", "Gym", "Meditation Room"],
    insuranceAccepted: ["All Major Insurance", "Self-Pay"],
    specialties: ["Alcohol", "Opioids", "Cocaine", "Dual Diagnosis"],
    description:
      "Premier addiction treatment facility with personalized care plans and luxury amenities.",
  },
  {
    id: 6,
    name: "Riverside Recovery Center",
    location: "Nashville, TN",
    rating: 4.4,
    reviewCount: 92,
    phone: "(555) 789-0123",
    website: "www.riversiderecovery.com",
    image: "/placeholder.svg?height=200&width=300",
    treatmentTypes: ["Inpatient", "Outpatient", "Therapy"],
    amenities: ["Music Therapy Room", "Gym", "Group Therapy Rooms"],
    insuranceAccepted: ["Blue Cross", "Aetna", "Tennessee Medicaid"],
    specialties: ["Alcohol", "Prescription Drugs", "Dual Diagnosis"],
    description:
      "Music-focused therapy programs in a supportive community environment along the river.",
  },
];

const filterOptions = {
  treatmentTypes: [
    "Inpatient",
    "Outpatient",
    "Intensive Outpatient",
    "Detox",
    "Therapy",
  ],
  amenities: [
    "Pool",
    "Gym",
    "Spa",
    "Private Rooms",
    "Meditation Room",
    "Beach Access",
    "Art Therapy Studio",
    "Garden",
    "Music Therapy Room",
    "Group Therapy Rooms",
  ],
  insuranceAccepted: [
    "Blue Cross",
    "Aetna",
    "Cigna",
    "United Healthcare",
    "Humana",
    "Medicare",
    "Medicaid",
    "Tennessee Medicaid",
    "All Major Insurance",
    "Self-Pay",
  ],
  specialties: [
    "Alcohol",
    "Opioids",
    "Cocaine",
    "Heroin",
    "Prescription Drugs",
    "Marijuana",
    "Dual Diagnosis",
    "Trauma",
  ],
  locations: [
    "Malibu, CA",
    "Denver, CO",
    "Miami, FL",
    "Portland, OR",
    "Phoenix, AZ",
    "Nashville, TN",
  ],
};

export default function RehabSearchFilter() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedFilters, setSelectedFilters] = React.useState<{
    treatmentTypes: string[];
    amenities: string[];
    insuranceAccepted: string[];
    specialties: string[];
    locations: string[];
  }>({
    treatmentTypes: [],
    amenities: [],
    insuranceAccepted: [],
    specialties: [],
    locations: [],
  });

  const handleFilterChange = (
    category: keyof typeof selectedFilters,
    value: string,
    checked: boolean
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  const filteredRehabs = React.useMemo(() => {
    return mockRehabs.filter((rehab) => {
      // Search term filter
      if (
        searchTerm &&
        !rehab.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !rehab.location.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      // Category filters
      const categories: (keyof typeof selectedFilters)[] = [
        "treatmentTypes",
        "amenities",
        "insuranceAccepted",
        "specialties",
        "locations",
      ];

      return categories.every((category) => {
        if (selectedFilters[category].length === 0) return true;

        if (category === "locations") {
          return selectedFilters[category].includes(rehab.location);
        }

        return selectedFilters[category].some((filter) =>
          rehab[category].includes(filter)
        );
      });
    });
  }, [searchTerm, selectedFilters]);

  const FilterSection = ({
    title,
    options,
    category,
  }: {
    title: string;
    options: string[];
    category: keyof typeof selectedFilters;
  }) => (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`${category}-${option}`}
                checked={selectedFilters[category].includes(option)}
                onCheckedChange={(checked) =>
                  handleFilterChange(category, option, checked as boolean)
                }
              />
              <Label
                htmlFor={`${category}-${option}`}
                className="text-sm font-normal cursor-pointer"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <SidebarProvider>
      <Sidebar className="border-r">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1">
            <Filter className="h-4 w-4" />
            <span className="font-semibold">Filter Rehabs</span>
          </div>
          <div className="px-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search rehabs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <FilterSection
            title="Treatment Types"
            options={filterOptions.treatmentTypes}
            category="treatmentTypes"
          />
          <FilterSection
            title="Amenities"
            options={filterOptions.amenities}
            category="amenities"
          />
          <FilterSection
            title="Insurance Accepted"
            options={filterOptions.insuranceAccepted}
            category="insuranceAccepted"
          />
          <FilterSection
            title="Specialties"
            options={filterOptions.specialties}
            category="specialties"
          />
          <FilterSection
            title="Locations"
            options={filterOptions.locations}
            category="locations"
          />
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">Rehabilitation Centers</h1>
            <span className="text-sm text-muted-foreground">
              ({filteredRehabs.length} results)
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredRehabs.map((rehab) => (
              <Card key={rehab.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={rehab.image || "/placeholder.svg"}
                    alt={rehab.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{rehab.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {rehab.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {rehab.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({rehab.reviewCount})
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {rehab.description}
                  </p>

                  <div className="space-y-2">
                    <div>
                      <h4 className="text-sm font-medium mb-1">
                        Treatment Types
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {rehab.treatmentTypes.map((type) => (
                          <span
                            key={type}
                            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-1">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {rehab.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {rehab.phone}
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        {rehab.website}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Contact Facility</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRehabs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No rehabilitation centers match your current filters.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
