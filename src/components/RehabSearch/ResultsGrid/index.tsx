"use client";

import React, { Suspense } from "react";
import { useRehabs } from "@/hooks/apolloHooks/rehabHooks";
import RehabCard from "./RehabCard";
import { FilterSelections } from "../context/types";
import { Rehab, RehabFilterInput } from "@/hooks/apolloHooks/rehabHooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const SkeletonCard = () => (
  <Card className="w-full max-w-4xl mx-auto shadow-lg">
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

const LoadingSidebar = () => (
  <div className="w-1/4 min-w-[280px] sticky top-24 h-fit">
    <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/5 to-accent/5">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
        <CardTitle className="mb-2 text-center">Start Your Journey</CardTitle>
        <p className="text-muted-foreground text-center text-sm leading-relaxed">
          Begin the admissions process for a selected rehab center.
        </p>
      </CardContent>
    </Card>
  </div>
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

interface ResultsGridProps {
  selections: FilterSelections;
  userState: string | null;
  locationLoading: boolean;
}

const ResultsGrid: React.FC<ResultsGridProps> = React.memo(
  ({ selections, userState, locationLoading }) => {
    const filterInput = selectionsToFilterInput(selections);

    console.log("ResultsGrid - selections:", selections);
    console.log("ResultsGrid - filterInput:", filterInput);

    const { rehabs, loading, error } = useRehabs(filterInput);

    console.log("ResultsGrid - rehabs count:", rehabs?.length);

    if (loading || locationLoading) {
      return (
        <div className="flex flex-row justify-center gap-8 mt-8">
          <div className="grid grid-cols-1 gap-6 w-3/5 max-w-4xl">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
          <LoadingSidebar />
        </div>
      );
    }

    if (error) return <div>Error loading rehabs: {error.message}</div>;

    // Check if we're showing location-based results
    const showLocationHeader =
      userState && selections.states.includes(userState);

    return (
      <Suspense
        fallback={
          <div className="flex flex-row justify-center gap-8 mt-8">
            <div className="grid grid-cols-1 gap-6 w-3/5 max-w-4xl">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
            <LoadingSidebar />
          </div>
        }
      >
        <div className="flex flex-row gap-8 mt-8">
          <div className="grid grid-cols-1 gap-6 w-3/5 max-w-4xl">
            {showLocationHeader && (
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Recovery Centers Near You
                </h2>
                <p className="text-lg text-muted-foreground">
                  Showing treatment facilities in {userState}
                </p>
              </div>
            )}
            {rehabs.length === 0 ? (
              <Card className="w-full p-8 text-center">
                <CardContent className="py-8">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <CardTitle className="mb-2">No Results Found</CardTitle>
                  <p className="text-muted-foreground">
                    Try adjusting your filters to find more treatment options.
                  </p>
                </CardContent>
              </Card>
            ) : (
              rehabs.map((rehab: Rehab) => (
                <RehabCard key={rehab.id} rehab={rehab} />
              ))
            )}
          </div>
          <div className="w-1/4 min-w-[280px] sticky top-24 h-fit">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="flex flex-col items-center justify-center py-12 px-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <CardTitle className="mb-3 text-center text-xl">
                  Ready to Begin?
                </CardTitle>
                <p className="text-muted-foreground text-center text-sm leading-relaxed mb-4">
                  Take the first step towards recovery. Select a treatment
                  center and start your admissions process.
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
                <p className="text-xs text-center text-muted-foreground/80">
                  💙 Your journey to wellness starts here
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
