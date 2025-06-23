"use client";

import React, { useEffect, useCallback, useRef } from "react";
import FilterTopBar from "./FilterTopBar";
import ResultsGrid from "./ResultsGrid";
import { useRehabSearch } from "./context/useRehabSearch";
import { useRouter, usePathname } from "next/navigation";
import { FilterCategoryKey, FilterSelections } from "./context/types";

const RehabSearch: React.FC<{ useQueryParams: URLSearchParams }> = ({
  useQueryParams,
}) => {
  const { selections, setSelections, setSelectionsFromQueryObject } =
    useRehabSearch();
  const router = useRouter();
  const pathname = usePathname();
  const debounceTimerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setSelectionsFromQueryObject(useQueryParams);
  }, [useQueryParams, setSelectionsFromQueryObject]);

  const debouncedUpdateURL = useCallback(
    (newSelections: FilterSelections) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        const params = new URLSearchParams();
        Object.entries(newSelections).forEach(([key, values]) => {
          if (Array.isArray(values) && values.length > 0) {
            params.set(key, values.join(","));
          }
        });

        const newURL = `${pathname}?${params.toString()}`;
        const currentURL = `${pathname}?${useQueryParams.toString()}`;

        // Only update URL if it's actually different
        if (newURL !== currentURL) {
          router.push(newURL, { scroll: false });
        }
      }, 300); // 300ms debounce
    },
    [router, pathname, useQueryParams]
  );

  const handleSelectionChange = useCallback(
    (category: FilterCategoryKey, value: string) => {
      const isSelected = selections[category].includes(value);
      const newSelections: FilterSelections = {
        ...selections,
        [category]: isSelected
          ? selections[category].filter((item: string) => item !== value)
          : [...selections[category], value],
      };

      setSelections(newSelections);
      debouncedUpdateURL(newSelections);
    },
    [selections, setSelections, debouncedUpdateURL]
  );

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto w-full">
      <FilterTopBar onSelectionChange={handleSelectionChange} />
      <ResultsGrid />
    </div>
  );
};

export default RehabSearch;
