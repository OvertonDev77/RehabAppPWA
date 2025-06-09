import React, { Suspense } from "react";
import { useRehabSearch } from "../context/useRehabSearch";
import { useRehabs } from "@/hooks/apolloHooks/rehabHooks";
import RehabCard from "./RehabCard";
import { FILTER_STATE_TO_INPUT_KEY, FilterSelections } from "../context/types";
import { Rehab } from "@/hooks/apolloHooks/rehabHooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

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

const ResultsGrid: React.FC = () => {
  const { selections } = useRehabSearch();
  const { rehabs, loading, error } = useRehabs(
    transformSelectionsToFilter(selections)
  );

  // Simulate a session user for development
  const userId = 1;

  if (loading) {
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
      <div className="flex flex-row justify-center gap-8">
        <div className="grid grid-cols-1 gap-4 mt-8 w-3/5 max-w-4xl">
          {rehabs.map((rehab: Rehab) => (
            <RehabCard key={rehab.id} rehab={rehab} userId={userId} />
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
};

function transformSelectionsToFilter(selections: FilterSelections) {
  const filter: Record<string, string[]> = {};
  for (const key in selections) {
    const gqlKey = FILTER_STATE_TO_INPUT_KEY[key as keyof FilterSelections];
    if (gqlKey && selections[key as keyof FilterSelections].length > 0) {
      filter[gqlKey] = selections[key as keyof FilterSelections];
    }
  }
  return filter;
}

export default ResultsGrid;
