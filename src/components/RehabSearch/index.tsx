"use client";

import React, { useEffect, useCallback, useRef } from "react";
import FilterTopBar from "./FilterTopBar";
import ResultsGrid from "./ResultsGrid";
import { useRehabSearch } from "./context/useRehabSearch";
import { useRouter, usePathname } from "next/navigation";
import { FilterCategoryKey, FilterSelections } from "./context/types";
import { useUserStateLocation } from "@/hooks/useUserStateLocation";

const RehabSearch: React.FC<{ useQueryParams: URLSearchParams }> = ({
  useQueryParams,
}) => {
  const { selections, setSelections, setSelectionsFromQueryObject } =
    useRehabSearch();
  const router = useRouter();
  const pathname = usePathname();
  const debounceTimerRef = useRef<NodeJS.Timeout>();
  const { state: userState, loading: locationLoading } = useUserStateLocation();
  const hasInitializedLocation = useRef(false);
  const isUpdatingFromURL = useRef(false);

  // Initialize state from URL params
  useEffect(() => {
    isUpdatingFromURL.current = true;
    setSelectionsFromQueryObject(useQueryParams);
    // Small delay to prevent immediate re-triggering
    setTimeout(() => {
      isUpdatingFromURL.current = false;
    }, 100);
  }, [useQueryParams, setSelectionsFromQueryObject]);

  // Set initial location-based URL if no filters are present and user location is available
  useEffect(() => {
    if (
      !locationLoading &&
      userState &&
      !hasInitializedLocation.current &&
      useQueryParams.toString() === "" // No existing query params
    ) {
      hasInitializedLocation.current = true;
      const params = new URLSearchParams();
      params.set("states", userState);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [userState, locationLoading, useQueryParams, router, pathname]);

  const debouncedUpdateURL = useCallback(
    (newSelections: FilterSelections) => {
      // Don't update URL if we're currently updating from URL
      if (isUpdatingFromURL.current) return;

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

      // 1. Immediately update local state for instant UI feedback
      setSelections(newSelections);

      // 2. Update URL (debounced) for persistence and sharing
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
