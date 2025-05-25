"use client";

import { useState, Suspense } from "react";
import {
  Search,
  MapPin,
  Star,
  Phone,
  Filter,
  ChevronRight,
} from "lucide-react";
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
import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  usePrototypeRehabs,
  PrototypeRehabFilters,
} from "@/hooks/apolloHooks/rehabHooks";

// Categorized filter options
const filterOptions = {
  amenities: [
    { id: "has_wifi", label: "Has WiFi" },
    { id: "pet_friendly", label: "Pet Friendly" },
    { id: "family_visitation_allowed", label: "Family Visitation Allowed" },
    { id: "transportation_services", label: "Transportation Services" },
    { id: "wheelchair_accessible", label: "Wheelchair Accessible" },
    { id: "outdoor_activities", label: "Outdoor Activities" },
    { id: "has_outings", label: "Has Outings" },
  ],
  treatment: [
    { id: "spiritual_programs", label: "Spiritual Programs" },
    { id: "holistic_treatments", label: "Holistic Treatments" },
    { id: "aftercare_support", label: "Aftercare Support" },
    { id: "alumni_program", label: "Alumni Program" },
    { id: "recreational_therapy", label: "Recreational Therapy" },
    { id: "art_therapy", label: "Art Therapy" },
    { id: "music_therapy", label: "Music Therapy" },
    { id: "equine_therapy", label: "Equine Therapy" },
    { id: "offers_suboxone", label: "Offers Suboxone" },
    { id: "offers_MAT", label: "Offers MAT" },
  ],
  insurance: [
    { id: "accepts_insurance", label: "Accepts Insurance" },
    { id: "accepts_medicaid", label: "Accepts Medicaid" },
  ],
};

function RehabResults({ filters }: { filters: PrototypeRehabFilters }) {
  const { loading, error, rehabs } = usePrototypeRehabs(filters);

  // Helper function to categorize rehab features
  const categorizeFeatures = (rehab: Record<string, any>) => {
    const categories = {
      amenities: [] as string[],
      treatment: [] as string[],
      insurance: [] as string[],
    };

    Object.entries(rehab).forEach(([key, value]) => {
      if (typeof value === "boolean" && value === true) {
        const option = [
          ...filterOptions.amenities,
          ...filterOptions.treatment,
          ...filterOptions.insurance,
        ].find((opt) => opt.id === key);

        if (option) {
          if (filterOptions.amenities.some((a) => a.id === key)) {
            categories.amenities.push(option.label);
          } else if (filterOptions.treatment.some((t) => t.id === key)) {
            categories.treatment.push(option.label);
          } else if (filterOptions.insurance.some((i) => i.id === key)) {
            categories.insurance.push(option.label);
          }
        }
      }
    });

    return categories;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 p-4">Error: {error.message}</p>;
  }

  if (!rehabs || rehabs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No rehabilitation centers match your current filters.
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Try adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {rehabs.map((rehab) => {
        const features = categorizeFeatures(rehab);
        return (
          <Card key={rehab.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{rehab.name1}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    {rehab.city}, {rehab.state}
                  </CardDescription>
                </div>
                {rehab.average_rating && (
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {rehab.average_rating.toFixed(1)}
                    </span>
                    {rehab.number_of_reviews && (
                      <span className="text-xs text-muted-foreground">
                        ({rehab.number_of_reviews})
                      </span>
                    )}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {rehab.objective_summary && (
                <p className="text-sm text-muted-foreground">
                  {rehab.objective_summary}
                </p>
              )}

              <div className="space-y-4">
                {features.amenities.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Available Amenities
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {features.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {features.treatment.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Treatment Options
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {features.treatment.map((treatment) => (
                        <span
                          key={treatment}
                          className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700"
                        >
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {features.insurance.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Insurance Information
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {features.insurance.map((insurance) => (
                        <span
                          key={insurance}
                          className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700"
                        >
                          {insurance}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Separator />

              {rehab.phone && (
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    {rehab.phone}
                  </div>
                </div>
              )}

              <Button className="w-full">Contact Facility</Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

interface RehabSearchProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export function RehabSearch({
  isSidebarOpen,
  setIsSidebarOpen,
}: RehabSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [filters, setFilters] = useState<PrototypeRehabFilters>({});

  const handleFilterChange = (id: string, checked: boolean) => {
    setLoadingProgress(100);
    setFilters((prev) => ({
      ...prev,
      [id]: checked,
    }));

    setTimeout(() => {
      setLoadingProgress(0);
    }, 100);
  };

  const FilterSection = ({
    title,
    options,
  }: {
    title: string;
    options: { id: string; label: string }[];
  }) => (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={option.id}
                checked={!!filters[option.id as keyof PrototypeRehabFilters]}
                onCheckedChange={(checked) =>
                  handleFilterChange(option.id, checked as boolean)
                }
              />
              <Label
                htmlFor={option.id}
                className="text-sm font-normal cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 mt-16">
        <Sidebar
          className={`border-r transition-transform duration-300 ${
            !isSidebarOpen ? "-translate-x-full" : ""
          }`}
        >
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
              title="Amenities"
              options={filterOptions.amenities}
            />
            <FilterSection
              title="Treatment Options"
              options={filterOptions.treatment}
            />
            <FilterSection
              title="Insurance"
              options={filterOptions.insurance}
            />
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <Button
              variant="default"
              size="lg"
              className="flex items-center gap-2 font-semibold"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Filter className="h-4 w-4" />
              {isSidebarOpen ? "Close Filters" : "Open Filters"}
              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  isSidebarOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">Rehabilitation Centers</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-4">
            <Progress value={loadingProgress} className="w-[40%] mb-4" />
            <Suspense
              fallback={
                <div className="flex items-center justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              }
            >
              <RehabResults filters={filters} />
            </Suspense>
          </div>
        </SidebarInset>
      </div>
    </div>
  );
}
