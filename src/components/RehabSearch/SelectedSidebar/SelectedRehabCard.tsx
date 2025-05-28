import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import type { Rehab } from "@/hooks/apolloHooks/rehabHooks";

interface SelectedRehabCardProps {
  rehab: Rehab;
  onRemove: () => void;
}

export function SelectedRehabCard({ rehab, onRemove }: SelectedRehabCardProps) {
  let imageSrc = "/math-83288.jpg";
  if (typeof rehab.photos === "string" && rehab.photos.startsWith("/")) {
    imageSrc = rehab.photos;
  } else if (
    typeof rehab.photos === "string" &&
    (rehab.photos.startsWith("http://") || rehab.photos.startsWith("https://"))
  ) {
    imageSrc = rehab.photos;
  }
  return (
    <Card className="p-3">
      <div className="flex gap-3">
        <div className="w-16 h-12 relative">
          <Image
            src={imageSrc}
            alt={rehab.name1 || "Rehab"}
            fill
            className="object-cover rounded"
            sizes="64px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate">{rehab.name1}</h4>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {rehab.city}, {rehab.state}
          </p>
          {rehab.average_rating && (
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">{rehab.average_rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRemove}
          className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
        >
          ×
        </Button>
      </div>
    </Card>
  );
}
