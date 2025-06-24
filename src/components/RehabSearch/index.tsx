"use client";

import React, { useCallback, useMemo } from "react";
import FilterTopBar from "./FilterTopBar";
import ResultsGrid from "./ResultsGrid";
import { useRehabSearch } from "./context/useRehabSearch";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FilterCategoryKey, FilterSelections } from "./context/types";

const RehabSearch: React.FC = () => {
  const { parseSelectionsFromQuery } = useRehabSearch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Memoize selections to prevent unnecessary re-computations
  const selections: FilterSelections = useMemo(() => {
    return parseSelectionsFromQuery(searchParams);
  }, [parseSelectionsFromQuery, searchParams]);

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
    <div className="max-w-6xl mx-auto w-full">
      <FilterTopBar
        onSelectionChange={handleSelectionChange}
        selections={selections}
      />
      <ResultsGrid selections={selections} />
    </div>
  );
};

export default RehabSearch;
