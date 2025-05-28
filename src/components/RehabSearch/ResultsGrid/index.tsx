import React from "react";
import { useRehabSearch } from "../context/useRehabSearch";
import { useRehabs } from "@/hooks/apolloHooks/rehabHooks";
import RehabCard from "./RehabCard";
import { FILTER_STATE_TO_INPUT_KEY, FilterSelections } from "../context/types";

const ResultsGrid: React.FC = () => {
  const { selections } = useRehabSearch();
  const { rehabs, loading, error } = useRehabs(
    transformSelectionsToFilter(selections)
  );

  if (loading) return <div>Loading rehabs...</div>;
  if (error) return <div>Error loading rehabs: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {rehabs.map((rehab: any) => (
        <RehabCard key={rehab.id} rehab={rehab} />
      ))}
    </div>
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
