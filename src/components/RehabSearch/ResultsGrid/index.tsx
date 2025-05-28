import type { Rehab } from "@/hooks/apolloHooks/rehabHooks";
import { RehabCard } from "./RehabCard";

interface ResultsGridProps {
  rehabs: Rehab[];
  selectedRehabs: Rehab[];
  onSelectRehab: (rehab: Rehab, checked: boolean) => void;
  selectionLimit: number;
}

export function ResultsGrid({
  rehabs,
  selectedRehabs,
  onSelectRehab,
  selectionLimit,
}: ResultsGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {rehabs.map((rehab) => {
        const isSelected = selectedRehabs.some((r) => r.id === rehab.id);
        const disableCheckbox =
          !isSelected && selectedRehabs.length >= selectionLimit;
        return (
          <RehabCard
            key={rehab.id}
            rehab={rehab}
            isSelected={isSelected}
            disableCheckbox={disableCheckbox}
            onSelect={(checked) => onSelectRehab(rehab, checked as boolean)}
          />
        );
      })}
    </div>
  );
}
