"use client";

import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useRehabSearch } from "./context/useRehabSearch";
import { FilterCategoryKey, FilterSelections } from "./context/types";

const formatCategoryName = (key: string): string => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

// Category icons mapping
const categoryIcons: Record<string, React.ReactNode> = {
  amenities: "🏠",
  levelsOfCare: "🏥",
  conditions: "❤️‍🩹",
  treatments: "💊",
  insuranceProviders: "🛡️",
  clienteles: "👥",
  settings: "🏞️",
  approaches: "🧠",
  priceRanges: "💰",
  countries: "🌍",
  states: "📍",
};

const FilterTopBar: React.FC<{
  onSelectionChange: (category: FilterCategoryKey, value: string) => void;
  selections: FilterSelections;
}> = ({ onSelectionChange, selections }) => {
  const { filterOptions } = useRehabSearch();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const getSelectedCount = (category: FilterCategoryKey): number => {
    return selections[category].length;
  };

  const getTotalFiltersCount = (): number => {
    return Object.values(selections).reduce(
      (total, arr) => total + (Array.isArray(arr) ? arr.length : 0),
      0
    );
  };

  return (
    <div className="w-full bg-gradient-to-r from-white via-blue-50/30 to-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header section */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              <h1 className="text-xl font-bold text-gray-900">
                Find Your Path to Recovery
              </h1>
            </div>
            {getTotalFiltersCount() > 0 && (
              <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                <Filter className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {getTotalFiltersCount()} filter
                  {getTotalFiltersCount() !== 1 ? "s" : ""} applied
                </span>
              </div>
            )}
          </div>
          <p className="text-muted-foreground">
            Use the filters below to find treatment centers that match your
            specific needs and preferences.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-3">
          {/* Left Chevron */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className="shrink-0 bg-white hover:bg-gray-50 border-2 shadow-sm"
            aria-label="Scroll filters left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Scrollable Filter Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide flex-1 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {Object.entries(filterOptions).map(([category, options]) => {
              const categoryKey = category as FilterCategoryKey;
              const selectedCount = getSelectedCount(categoryKey);
              const categoryIcon = categoryIcons[category];

              return (
                <DropdownMenu key={category}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "shrink-0 gap-2 min-w-fit bg-white hover:bg-gray-50 border-2 transition-all duration-200 shadow-sm hover:shadow-md",
                        selectedCount > 0 &&
                          "bg-primary text-white hover:bg-primary/90 border-primary shadow-md"
                      )}
                    >
                      {categoryIcon && (
                        <span className="text-sm">{categoryIcon}</span>
                      )}
                      {formatCategoryName(category)}
                      {selectedCount > 0 && (
                        <span className="bg-white text-primary rounded-full px-2 py-0.5 text-xs font-bold min-w-[20px] text-center">
                          {selectedCount}
                        </span>
                      )}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-72 max-h-80 overflow-y-auto bg-white border-0 shadow-xl">
                    <div className="p-4">
                      <div className="flex items-center gap-2 font-semibold text-base mb-3 px-2 text-gray-900">
                        {categoryIcon && (
                          <span className="text-lg">{categoryIcon}</span>
                        )}
                        {formatCategoryName(category)}
                        {selectedCount > 0 && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {selectedCount} selected
                          </span>
                        )}
                      </div>
                      <div className="space-y-1">
                        {options.map((option) => {
                          const isSelected =
                            selections[categoryKey].includes(option);
                          return (
                            <div
                              key={option}
                              className={cn(
                                "flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 group",
                                isSelected &&
                                  "bg-primary/5 border border-primary/20 hover:bg-primary/10"
                              )}
                              onClick={() =>
                                onSelectionChange(categoryKey, option)
                              }
                            >
                              <Checkbox
                                checked={isSelected}
                                disabled
                                className="pointer-events-none border-2"
                              />
                              <span
                                className={cn(
                                  "text-sm flex-1 font-medium",
                                  isSelected ? "text-primary" : "text-gray-700"
                                )}
                              >
                                {option}
                              </span>
                              {isSelected && (
                                <Check className="h-4 w-4 text-primary animate-in zoom-in-50 duration-200" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                      {options.length === 0 && (
                        <div className="text-center py-6 text-muted-foreground">
                          <p className="text-sm">No options available</p>
                        </div>
                      )}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}
          </div>

          {/* Right Chevron */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="shrink-0 bg-white hover:bg-gray-50 border-2 shadow-sm"
            aria-label="Scroll filters right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Motivational message */}
        {getTotalFiltersCount() === 0 && (
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground italic">
              ✨ Every journey begins with a single step. Let us help you find
              the right treatment center for your recovery.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterTopBar;
