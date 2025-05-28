import { Suspense } from "react";
import { Loader2, Filter, Star, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { usePrototypeRehabs } from "@/hooks/apolloHooks/rehabHooks";
import { RehabSearchProvider } from "./context/RehabSearchContext";
import { useRehabSearch } from "./context/useRehabSearch";
import { ResultsGrid } from "./ResultsGrid";
import { SelectedSidebar } from "./SelectedSidebar";
import { FilterSection } from "./FilterSidebar/FilterSection";
import type { Rehab } from "@/hooks/apolloHooks/rehabHooks";
import type { PrototypeRehabFilters } from "@/hooks/apolloHooks/rehabHooks";

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

function getSelectedOptions(
  filters: PrototypeRehabFilters,
  options: { id: string }[]
): string[] {
  return options
    .map((opt) => opt.id)
    .filter((id) => filters[id as keyof PrototypeRehabFilters] === true);
}

function RehabSearchInner() {
  const {
    searchTerm,
    setSearchTerm,
    loadingProgress,
    filters,
    selectedRehabs,
    setSelectedRehabs,
    sidebarView,
    setSidebarView,
    handleFilterChange,
  } = useRehabSearch();

  const { loading, error, rehabs } = usePrototypeRehabs(filters);

  // Selection logic
  const handleRehabSelection = (rehab: Rehab, isSelected: boolean) => {
    if (isSelected && selectedRehabs.length >= 4) return;
    setSelectedRehabs(
      isSelected
        ? [...selectedRehabs, rehab]
        : selectedRehabs.filter((r) => r.id !== rehab.id)
    );
  };
  const removeSelectedRehab = (rehabId: number) => {
    setSelectedRehabs(selectedRehabs.filter((r) => r.id !== rehabId));
  };

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
                  selectedOptions={getSelectedOptions(
                    filters,
                    filterOptions.amenities
                  )}
                  onChange={handleFilterChange}
                />
                <FilterSection
                  title="Treatment Options"
                  options={filterOptions.treatment}
                  selectedOptions={getSelectedOptions(
                    filters,
                    filterOptions.treatment
                  )}
                  onChange={handleFilterChange}
                />
                <FilterSection
                  title="Insurance"
                  options={filterOptions.insurance}
                  selectedOptions={getSelectedOptions(
                    filters,
                    filterOptions.insurance
                  )}
                  onChange={handleFilterChange}
                />
              </>
            ) : (
              <SelectedSidebar
                selectedRehabs={selectedRehabs}
                onRemoveRehab={removeSelectedRehab}
                onCompare={() => {
                  // Add compare functionality here
                  console.log("Compare selected rehabs:", selectedRehabs);
                }}
              />
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
              {loading ? (
                <div className="flex items-center justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : error ? (
                <p className="text-red-500 p-4">Error: {error.message}</p>
              ) : rehabs && rehabs.length > 0 ? (
                <ResultsGrid
                  rehabs={rehabs}
                  selectedRehabs={selectedRehabs}
                  onSelectRehab={handleRehabSelection}
                  selectionLimit={4}
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No rehabilitation centers match your current filters.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Try adjusting your search criteria.
                  </p>
                </div>
              )}
            </Suspense>
          </div>
        </SidebarInset>
      </div>
    </div>
  );
}

export default function RehabSearch() {
  return (
    <SidebarProvider>
      <RehabSearchProvider>
        <RehabSearchInner />
      </RehabSearchProvider>
    </SidebarProvider>
  );
}
