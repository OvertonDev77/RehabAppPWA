import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import type { Rehab } from "@/hooks/apolloHooks/rehabHooks";

interface RehabCardProps {
  rehab: Rehab;
  isSelected: boolean;
  disableCheckbox: boolean;
  onSelect: (checked: boolean) => void;
}

export function RehabCard({
  rehab,
  isSelected,
  disableCheckbox,
  onSelect,
}: RehabCardProps) {
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
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={imageSrc}
          alt={rehab.name1 || "Rehab"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <CardHeader>
        <div className="flex items-start gap-3 flex-1">
          <Checkbox
            checked={isSelected}
            onCheckedChange={onSelect}
            disabled={disableCheckbox}
            className="mt-1"
          />
          <div className="flex-1">
            <CardTitle className="text-lg">{rehab.name1}</CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" />
              {rehab.city}, {rehab.state}
            </CardDescription>
          </div>
        </div>
        {rehab.average_rating && (
          <div className="flex items-center gap-1 mt-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">
              {rehab.average_rating.toFixed(1)}
            </span>
            {rehab.number_of_reviews && (
              <span className="text-xs text-muted-foreground">
                ({rehab.number_of_reviews})
              </span>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        {rehab.objective_summary && (
          <p className="text-sm text-muted-foreground">
            {rehab.objective_summary}
          </p>
        )}
        {/* Add amenities, specialties, etc. here as needed */}
      </CardContent>
    </Card>
  );
}
