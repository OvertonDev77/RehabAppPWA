"use client";

import React, { useRef, memo, useCallback } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useRehabSearch } from "./context/useRehabSearch";
import { FilterCategoryKey } from "./context/types";

const formatCategoryName = (key: string): string => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

const FilterTopBar: React.FC<{
  onSelectionChange: (category: FilterCategoryKey, value: string) => void;
}> = memo(({ onSelectionChange }) => {
  const { selections, filterOptions } = useRehabSearch();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  }, []);

  const getSelectedCount = useCallback(
    (category: FilterCategoryKey): number => {
      return selections[category].length;
    },
    [selections]
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-2">
        {/* Left Chevron */}
        <Button
          variant="outline"
          size="icon"
          onClick={scrollLeft}
          className="shrink-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Scrollable Filter Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {Object.entries(filterOptions).map(([category, options]) => {
            const categoryKey = category as FilterCategoryKey;
            const selectedCount = getSelectedCount(categoryKey);

            return (
              <DropdownMenu key={category}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "shrink-0 gap-2 min-w-fit",
                      selectedCount > 0 && "bg-primary text-primary-foreground"
                    )}
                  >
                    {formatCategoryName(category)}
                    {selectedCount > 0 && (
                      <span className="bg-background text-foreground rounded-full px-2 py-0.5 text-xs font-medium">
                        {selectedCount}
                      </span>
                    )}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 max-h-80 overflow-y-auto">
                  <div className="p-2">
                    <div className="font-semibold text-sm mb-2 px-2">
                      {formatCategoryName(category)}
                    </div>
                    <div className="space-y-1">
                      {options.map((option) => {
                        const isSelected =
                          selections[categoryKey].includes(option);
                        return (
                          <div
                            key={option}
                            className={cn(
                              "flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-muted transition-colors",
                              isSelected && "bg-primary/10"
                            )}
                            onClick={() =>
                              onSelectionChange(categoryKey, option)
                            }
                          >
                            <Checkbox
                              checked={isSelected}
                              disabled
                              className="pointer-events-none"
                            />
                            <span className="text-sm flex-1">{option}</span>
                            {isSelected && (
                              <Check className="h-4 w-4 text-primary" />
                            )}
                          </div>
                        );
                      })}
                    </div>
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
          className="shrink-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
});

FilterTopBar.displayName = "FilterTopBar";

export default FilterTopBar;
