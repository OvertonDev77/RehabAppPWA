import { useContext } from "react";
import { RehabSearchContext } from "./RehabSearchContext";
import type { RehabSearchContextType } from "./types";

export function useRehabSearch(): RehabSearchContextType {
  const ctx = useContext(RehabSearchContext);
  if (!ctx) {
    throw new Error("useRehabSearch must be used within a RehabSearchProvider");
  }
  return ctx;
}
