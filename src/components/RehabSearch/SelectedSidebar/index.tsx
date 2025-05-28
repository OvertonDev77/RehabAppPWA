import type { Rehab } from "@/hooks/apolloHooks/rehabHooks";
import { SelectedRehabCard } from "./SelectedRehabCard";
import { Button } from "@/components/ui/button";

interface SelectedSidebarProps {
  selectedRehabs: Rehab[];
  onRemoveRehab: (rehabId: number) => void;
  onCompare: () => void;
}

export function SelectedSidebar({
  selectedRehabs,
  onRemoveRehab,
  onCompare,
}: SelectedSidebarProps) {
  return (
    <div className="px-2 space-y-3">
      {selectedRehabs.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">
            No rehabs selected yet
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Select up to 4 rehabs to compare
          </p>
        </div>
      ) : (
        selectedRehabs.map((rehab) => (
          <SelectedRehabCard
            key={rehab.id}
            rehab={rehab}
            onRemove={() => onRemoveRehab(rehab.id)}
          />
        ))
      )}
      {selectedRehabs.length > 0 && (
        <div className="pt-4 border-t">
          <Button variant="outline" className="w-full" onClick={onCompare}>
            Compare Selected ({selectedRehabs.length})
          </Button>
        </div>
      )}
    </div>
  );
}
