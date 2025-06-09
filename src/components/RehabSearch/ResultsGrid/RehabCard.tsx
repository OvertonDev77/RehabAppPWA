import React, { useState } from "react";
import Image from "next/image";
import { Rehab } from "@/hooks/apolloHooks/rehabHooks";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Star,
  Wifi,
  Dumbbell,
  Utensils,
  CheckCircle,
  Heart,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useRehabSearchContext } from "../context/RehabSearchContext";

// Helper: get fallback Unsplash images
const getFallbackImages = (count = 3) =>
  [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  ].slice(0, count);

function getRehabImages(rehab: Rehab): string[] {
  const photos = (rehab as { photos?: string | string[] }).photos;
  if (Array.isArray(photos) && photos.length > 0) {
    return photos;
  }
  if (typeof photos === "string" && photos.length > 0) {
    return [photos];
  }
  return getFallbackImages(2);
}

// Map some amenities to lucide-react icons
const amenityIconMap: Record<string, React.ElementType> = {
  Wifi: Wifi,
  Gym: Dumbbell,
  Meals: Utensils,
  "24/7 Care": CheckCircle,
};

const RehabCard: React.FC<{ rehab: Rehab }> = ({ rehab }) => {
  const images = getRehabImages(rehab).slice(0, 2); // Only show first 2 images
  const [imgLoaded, setImgLoaded] = useState(Array(images.length).fill(false));
  const { selectedRehabs, setSelectedRehabs } = useRehabSearchContext();
  const isSelected = selectedRehabs.some((r) => r.id === rehab.id);

  // Insurance dropdown
  const insuranceProviders = rehab.insuranceProviders || [];
  const [selectedInsurance, setSelectedInsurance] = useState<string>("");

  // Amenities with icons
  const amenities = (rehab.amenities || []).slice(0, 3);

  // Star rating calculation (from reviews if present)
  let avgRating = undefined;
  if (Array.isArray(rehab.reviews) && rehab.reviews.length > 0) {
    avgRating =
      rehab.reviews.reduce((sum, r) => sum + (r.rating || 0), 0) /
      rehab.reviews.length;
  }

  // Heart click handler
  const handleHeartClick = () => {
    if (isSelected) {
      setSelectedRehabs(selectedRehabs.filter((r) => r.id !== rehab.id));
    } else {
      setSelectedRehabs([...selectedRehabs, rehab]);
    }
  };

  return (
    <Card className="relative w-full max-w-4xl mx-auto shadow-lg">
      {/* Heart at top right */}
      <button
        className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/80 hover:bg-white"
        onClick={handleHeartClick}
        aria-label={isSelected ? "Unselect rehab" : "Select rehab"}
      >
        <Heart
          className={`h-6 w-6 transition-colors ${
            isSelected ? "fill-red-500 text-red-500" : "text-gray-400"
          }`}
        />
      </button>
      {/* Carousel using shadcn/ui pattern */}
      <Carousel className="w-full mb-4" opts={{ align: "start" }}>
        <CarouselContent className="-ml-2">
          {images.map((src, idx) => (
            <CarouselItem key={src} className="pl-2 basis-1/2">
              <div className="relative h-48 w-full">
                {!imgLoaded[idx] && (
                  <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <Image
                  src={src}
                  alt={rehab.name || "Rehab"}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                  onLoad={() =>
                    setImgLoaded((prev) => {
                      const arr = [...prev];
                      arr[idx] = true;
                      return arr;
                    })
                  }
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <CardContent className="pt-0 pb-2">
        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
          <MapPin className="h-4 w-4" />
          {rehab.address}
        </div>
        {/* Name and Star */}
        <div className="flex items-center gap-2 mb-1">
          <CardTitle className="text-lg font-bold truncate flex-1">
            {rehab.name}
          </CardTitle>
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-sm">
              {typeof avgRating === "number" ? avgRating.toFixed(1) : "-"}
            </span>
          </div>
        </div>
        {/* Insurance Dropdown */}
        <div className="mb-2 max-w-xs">
          <Select
            value={selectedInsurance}
            onValueChange={setSelectedInsurance}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Insurance Accepted" />
            </SelectTrigger>
            <SelectContent>
              {insuranceProviders.length === 0 ? (
                <SelectItem value="none" disabled>
                  No insurance listed
                </SelectItem>
              ) : (
                insuranceProviders.map((ip) => (
                  <SelectItem key={ip.name} value={ip.name}>
                    {ip.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </div>
        {/* Description */}
        <div className="text-sm text-gray-800 mb-2 min-h-[2.5em]">
          {rehab.description}
        </div>
        {/* Amenities with icons */}
        <div className="flex gap-4 mb-2">
          {amenities.map((a) => {
            const Icon = amenityIconMap[a.name] || CheckCircle;
            return (
              <div key={a.name} className="flex items-center gap-1 text-xs">
                <Icon className="h-4 w-4 text-blue-500" />
                <span>{a.name}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
      {/* No CardFooter/ReviewSection */}
    </Card>
  );
};

export default RehabCard;
