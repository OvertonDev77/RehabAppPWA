"use client";

import React, { useCallback, useMemo, useEffect } from "react";
import FilterTopBar from "./FilterTopBar";
import ResultsGrid from "./ResultsGrid";
import { useRehabSearch } from "./context/useRehabSearch";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FilterCategoryKey, FilterSelections } from "./context/types";
import { useUserStateLocation } from "@/hooks/useUserStateLocation";

const RehabSearch: React.FC = () => {
  const { parseSelectionsFromQuery } = useRehabSearch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { state: userState, loading: locationLoading } = useUserStateLocation();

  // Memoize selections to prevent unnecessary re-computations
  const selections: FilterSelections = useMemo(() => {
    return parseSelectionsFromQuery(searchParams);
  }, [parseSelectionsFromQuery, searchParams]);

  // Check if any filters are currently applied
  const hasFiltersApplied = useMemo(() => {
    return Object.values(selections).some(
      (arr) => Array.isArray(arr) && arr.length > 0
    );
  }, [selections]);

  // Set user state in URL when location is resolved and no filters are applied
  useEffect(() => {
    if (
      userState &&
      !locationLoading &&
      !hasFiltersApplied &&
      !selections.states.includes(userState)
    ) {
      const params = new URLSearchParams(searchParams);
      params.set("states", userState);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [
    userState,
    locationLoading,
    hasFiltersApplied,
    selections.states,
    searchParams,
    router,
    pathname,
  ]);

  // Memoize the selection change handler
  const handleSelectionChange = useCallback(
    (category: FilterCategoryKey, value: string) => {
      const isSelected = selections[category].includes(value);
      const newSelections: FilterSelections = {
        ...selections,
        [category]: isSelected
          ? selections[category].filter((item: string) => item !== value)
          : [...selections[category], value],
      };

      const params = new URLSearchParams();
      Object.entries(newSelections).forEach(([key, values]) => {
        if (Array.isArray(values) && values.length > 0) {
          params.set(key, values.join(","));
        }
      });
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [selections, router, pathname]
  );

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <FilterTopBar
        onSelectionChange={handleSelectionChange}
        selections={selections}
      />
      <ResultsGrid
        selections={selections}
        userState={userState}
        locationLoading={locationLoading}
      />
    </div>
  );
};

export default RehabSearch;
