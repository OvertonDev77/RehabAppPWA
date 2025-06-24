"use client";

import React, { Suspense } from "react";
import { useRehabs } from "@/hooks/apolloHooks/rehabHooks";
import RehabCard from "./RehabCard";
import { FilterSelections } from "../context/types";
import { Rehab, RehabFilterInput } from "@/hooks/apolloHooks/rehabHooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useUserStateLocation } from "@/hooks/useUserStateLocation";

const SkeletonCard = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <div className="aspect-[16/9] w-full mb-4">
      <Skeleton className="w-full h-48 rounded-xl" />
    </div>
    <div className="px-6 pb-2">
      <Skeleton className="h-6 w-2/3 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <div className="flex gap-2">
        <Skeleton className="h-5 w-20 rounded" />
        <Skeleton className="h-5 w-20 rounded" />
      </div>
    </div>
    <div className="px-6 pb-4">
      <Skeleton className="h-8 w-full rounded" />
    </div>
  </Card>
);

// Utility to map selections to RehabFilterInput
function selectionsToFilterInput(
  selections: FilterSelections
): RehabFilterInput {
  const filterInput: Partial<RehabFilterInput> = {};

  if (selections.amenities.length > 0) {
    filterInput.amenityNames = selections.amenities;
  }
  if (selections.levelsOfCare.length > 0) {
    filterInput.levelOfCareNames = selections.levelsOfCare;
  }
  if (selections.conditions.length > 0) {
    filterInput.conditionNames = selections.conditions;
  }
  if (selections.treatments.length > 0) {
    filterInput.treatmentNames = selections.treatments;
  }
  if (selections.insuranceProviders.length > 0) {
    filterInput.insuranceProviderNames = selections.insuranceProviders;
  }
  if (selections.clienteles.length > 0) {
    filterInput.clienteleNames = selections.clienteles;
  }
  if (selections.settings.length > 0) {
    filterInput.settingNames = selections.settings;
  }
  if (selections.approaches.length > 0) {
    filterInput.approachNames = selections.approaches;
  }
  if (selections.priceRanges.length > 0) {
    filterInput.priceRangeLabels = selections.priceRanges;
  }
  if (selections.countries.length > 0) {
    filterInput.countryNames = selections.countries;
  }
  if (selections.states.length > 0) {
    filterInput.stateNames = selections.states;
  }

  return filterInput;
}

const ResultsGrid: React.FC<{ selections: FilterSelections }> = React.memo(
  ({ selections }) => {
    const filterInput = selectionsToFilterInput(selections);

    console.log("ResultsGrid - selections:", selections);
    console.log("ResultsGrid - filterInput:", filterInput);

    const { rehabs, loading, error } = useRehabs(filterInput);
    const { state: userState, loading: locationLoading } =
      useUserStateLocation();

    console.log("ResultsGrid - rehabs count:", rehabs?.length);

    if (loading || locationLoading) {
      return (
        <div className="flex flex-row justify-center gap-8">
          <div className="grid grid-cols-1 gap-4 mt-8 w-3/5 max-w-4xl">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
          <div className="w-1/4 min-w-[250px] sticky top-24 h-fit">
            <Card className="shadow-lg">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <CardTitle className="mb-2">Start Admissions</CardTitle>
                <p className="text-muted-foreground text-center">
                  Begin the admissions process for a selected rehab here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }
    if (error) return <div>Error loading rehabs: {error.message}</div>;

    // Filter rehabs by user state if available and no filters have been applied
    const noFiltersApplied = Object.values(selections).every(
      (arr) => Array.isArray(arr) && arr.length === 0
    );
    let rehabsToShow = rehabs;
    let showNearYou = false;
    if (userState && noFiltersApplied) {
      rehabsToShow = rehabs.filter(
        (rehab: Rehab) =>
          Array.isArray(rehab.states) &&
          rehab.states.some(
            (s) => s.name && s.name.toLowerCase() === userState.toLowerCase()
          )
      );
      showNearYou = true;
      // If no rehabs in state, fallback to all
      if (rehabsToShow.length === 0) {
        rehabsToShow = rehabs;
        showNearYou = false;
      }
    }

    return (
      <Suspense
        fallback={
          <div className="flex flex-row justify-center gap-8">
            <div className="grid grid-cols-1 gap-4 mt-8 w-3/5 max-w-4xl">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
            <div className="w-1/4 min-w-[250px] sticky top-24 h-fit">
              <Card className="shadow-lg">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <CardTitle className="mb-2">Start Admissions</CardTitle>
                  <p className="text-muted-foreground text-center">
                    Begin the admissions process for a selected rehab here.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        }
      >
        <div className="flex flex-row gap-8">
          <div className="grid grid-cols-1 gap-4 mt-8 w-full">
            {showNearYou && (
              <h2 className="text-2xl font-bold mb-4">
                Rehabs Near You ({userState})
              </h2>
            )}
            {rehabsToShow.map((rehab: Rehab) => (
              <RehabCard key={rehab.id} rehab={rehab} />
            ))}
          </div>
          <div className="w-1/4 min-w-[250px] sticky top-24 h-fit">
            <Card className="shadow-lg">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <CardTitle className="mb-2">Start Admissions</CardTitle>
                <p className="text-muted-foreground text-center">
                  Begin the admissions process for a selected rehab here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Suspense>
    );
  }
);

ResultsGrid.displayName = "ResultsGrid";

export default ResultsGrid;
