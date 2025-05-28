import React, { createContext, useState } from "react";
import type { RehabSearchContextType, SidebarView } from "./types";
import { PrototypeRehabFilters, Rehab } from "@/hooks/apolloHooks/rehabHooks";

export const RehabSearchContext = createContext<
  RehabSearchContextType | undefined
>(undefined);

export const RehabSearchProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [filters, setFilters] = useState<PrototypeRehabFilters>({});
  const [selectedRehabs, setSelectedRehabs] = useState<Rehab[]>([]);
  const [sidebarView, setSidebarView] = useState<SidebarView>("filters");

  const handleFilterChange = (id: string, checked: boolean) => {
    setLoadingProgress(100);
    setFilters((prev) => {
      if (checked) {
        return { ...prev, [id]: true };
      } else {
        const { [id]: _, ...rest } = prev as any;
        return rest;
      }
    });
    setTimeout(() => setLoadingProgress(0), 100);
  };

  const value: RehabSearchContextType = {
    searchTerm,
    setSearchTerm,
    loadingProgress,
    setLoadingProgress,
    filters,
    setFilters,
    selectedRehabs,
    setSelectedRehabs,
    sidebarView,
    setSidebarView,
    handleFilterChange,
  };

  return (
    <RehabSearchContext.Provider value={value}>
      {children}
    </RehabSearchContext.Provider>
  );
};
