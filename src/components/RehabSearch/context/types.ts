// Types for the RehabSearch context
import type {
  PrototypeRehabFilters,
  Rehab,
} from "@/hooks/apolloHooks/rehabHooks";

export type SidebarView = "filters" | "selected";

export interface RehabSearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
  filters: PrototypeRehabFilters;
  setFilters: (filters: PrototypeRehabFilters) => void;
  selectedRehabs: Rehab[];
  setSelectedRehabs: (rehabs: Rehab[]) => void;
  sidebarView: SidebarView;
  setSidebarView: (view: SidebarView) => void;
  handleFilterChange: (id: string, checked: boolean) => void;
}
