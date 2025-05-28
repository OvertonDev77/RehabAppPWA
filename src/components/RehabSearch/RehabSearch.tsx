"use client";

import { useState, Suspense } from "react";
import { Search, MapPin, Star, Phone, Filter, Globe } from "lucide-react";
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
import Image from "next/image";
import Link from "next/link";
import type { Rehab } from "@/hooks/apolloHooks/rehabHooks";

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

export function RehabSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [filters, setFilters] = useState<PrototypeRehabFilters>({});
  const [selectedRehabs, setSelectedRehabs] = useState<Rehab[]>([]);
  const [sidebarView, setSidebarView] = useState<"filters" | "selected">(
    "filters"
  );

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

  // Selection logic
  const handleRehabSelection = (rehab: Rehab, isSelected: boolean) => {
    if (isSelected && selectedRehabs.length >= 4) return;
    setSelectedRehabs((prev) =>
      isSelected ? [...prev, rehab] : prev.filter((r) => r.id !== rehab.id)
    );
  };
  const removeSelectedRehab = (rehabId: number) => {
    setSelectedRehabs((prev) => prev.filter((r) => r.id !== rehabId));
  };

  // Mini-card for selected rehabs
  const SelectedRehabCard = ({
    rehab,
    onRemove,
  }: {
    rehab: Rehab;
    onRemove: () => void;
  }) => {
    let imageSrc = "/math-83288.jpg";
    if (typeof rehab.photos === "string" && rehab.photos.startsWith("/")) {
      imageSrc = rehab.photos;
    } else if (
      typeof rehab.photos === "string" &&
      (rehab.photos.startsWith("http://") ||
        rehab.photos.startsWith("https://"))
    ) {
      imageSrc = rehab.photos;
    }
    return (
      <Card className="p-3">
        <div className="flex gap-3">
          <div className="w-16 h-12 relative">
            <Image
              src={imageSrc}
              alt={rehab.name1 || "Rehab"}
              fill
              className="object-cover rounded"
              sizes="64px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm truncate">{rehab.name1}</h4>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {rehab.city}, {rehab.state}
            </p>
            {rehab.average_rating && (
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs">
                  {rehab.average_rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onRemove}
            className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
          >
            ×
          </Button>
        </div>
      </Card>
    );
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

  // Enhanced RehabResults with selection checkboxes
  function EnhancedRehabResults({
    filters,
  }: {
    filters: PrototypeRehabFilters;
  }) {
    const { loading, error, rehabs } = usePrototypeRehabs(filters);
    const categorizeFeatures = (rehab: Rehab) => {
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
          const isSelected = selectedRehabs.some((r) => r.id === rehab.id);
          const disableCheckbox = !isSelected && selectedRehabs.length >= 4;
          let imageSrc = "/math-83288.jpg";
          if (
            typeof rehab.photos === "string" &&
            rehab.photos.startsWith("/")
          ) {
            imageSrc = rehab.photos;
          } else if (
            typeof rehab.photos === "string" &&
            (rehab.photos.startsWith("http://") ||
              rehab.photos.startsWith("https://"))
          ) {
            imageSrc = rehab.photos;
          }
          return (
            <Card key={rehab.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={imageSrc}
                  alt={rehab.name1 || "Rehab"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={(checked) =>
                        handleRehabSelection(rehab, checked as boolean)
                      }
                      disabled={disableCheckbox}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{rehab.name1}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {rehab.city}, {rehab.state}
                      </CardDescription>
                    </div>
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
                    {rehab.virtual_tour_url && (
                      <div className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        <Link
                          href={rehab.virtual_tour_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          Virtual Tour
                        </Link>
                      </div>
                    )}
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

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 mt-16">
        <Sidebar className="border-r">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1">
              {sidebarView === "filters" ? (
                <>
                  <Filter className="h-4 w-4" />
                  <span className="font-semibold">Filter Rehabs</span>
                </>
              ) : (
                <>
                  <Star className="h-4 w-4" />
                  <span className="font-semibold">
                    Selected Rehabs ({selectedRehabs.length}/4)
                  </span>
                </>
              )}
            </div>
            <div className="flex gap-2 px-2 mt-2">
              <Button
                variant={sidebarView === "selected" ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setSidebarView(
                    sidebarView === "filters" ? "selected" : "filters"
                  )
                }
                className="w-full"
              >
                {sidebarView === "filters" ? (
                  <>
                    <Star className="h-4 w-4 mr-1" /> Selected (
                    {selectedRehabs.length})
                  </>
                ) : (
                  <>
                    <Filter className="h-4 w-4 mr-1" /> Filters
                  </>
                )}
              </Button>
            </div>
            {sidebarView === "filters" && (
              <div className="px-2 mt-2">
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
            )}
          </SidebarHeader>
          <SidebarContent>
            {sidebarView === "filters" ? (
              <>
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
              </>
            ) : (
              <div className="px-2 space-y-3">
                {selectedRehabs.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground">
                      No rehabs selected yet
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Select up to 4 rehabs to compare
                    </p>
                  </div>
                ) : (
                  selectedRehabs.map((rehab) => (
                    <SelectedRehabCard
                      key={rehab.id}
                      rehab={rehab}
                      onRemove={() => removeSelectedRehab(rehab.id)}
                    />
                  ))
                )}
                {selectedRehabs.length > 0 && (
                  <div className="pt-4 border-t">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        // Add compare functionality here
                        console.log("Compare selected rehabs:", selectedRehabs);
                      }}
                    >
                      Compare Selected ({selectedRehabs.length})
                    </Button>
                  </div>
                )}
              </div>
            )}
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <Button
              variant={sidebarView === "selected" ? "default" : "outline"}
              size="sm"
              onClick={() =>
                setSidebarView(
                  sidebarView === "filters" ? "selected" : "filters"
                )
              }
              className="ml-2"
            >
              {sidebarView === "filters" ? (
                <>
                  <Star className="h-4 w-4 mr-1" /> Selected (
                  {selectedRehabs.length})
                </>
              ) : (
                <>
                  <Filter className="h-4 w-4 mr-1" /> Filters
                </>
              )}
            </Button>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">Rehabilitation Centers</h1>
              <span className="text-sm text-muted-foreground">
                {/* Results count can be added here if needed */}
              </span>
              {selectedRehabs.length > 0 && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {selectedRehabs.length}/4 selected
                </span>
              )}
            </div>
          </header>
          <div className="flex-1 overflow-auto p-4">
            <Progress value={loadingProgress} className="w-[80%] mb-4" />
            <Suspense
              fallback={
                <div className="flex items-center justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              }
            >
              <EnhancedRehabResults filters={filters} />
            </Suspense>
          </div>
        </SidebarInset>
      </div>
    </div>
  );
}
