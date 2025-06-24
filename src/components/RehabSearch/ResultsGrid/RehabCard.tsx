import React, { useState } from "react";
import Image from "next/image";
import { Rehab } from "@/hooks/apolloHooks/rehabHooks";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
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
  Shield,
  Users,
  Clock,
  Award,
  Phone,
  Globe,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useRehabSearchContext } from "../context/RehabSearchContext";

// Helper: get fallback Unsplash images with medical/wellness themes
const getFallbackImages = (count = 3) =>
  [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
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

// Enhanced amenity icon mapping with more comprehensive coverage
const amenityIconMap: Record<string, React.ElementType> = {
  Wifi: Wifi,
  "Wi-Fi": Wifi,
  Gym: Dumbbell,
  Fitness: Dumbbell,
  "Fitness Center": Dumbbell,
  Meals: Utensils,
  Dining: Utensils,
  "24/7 Care": Clock,
  "24/7 Support": Clock,
  "Round-the-clock": Clock,
  Security: Shield,
  "Secure Facility": Shield,
  Groups: Users,
  "Group Therapy": Users,
  Community: Users,
  Medical: CheckCircle,
  "Medical Care": CheckCircle,
  Award: Award,
  Accredited: Award,
};

// Motivational quotes for recovery
const motivationalQuotes = [
  "Recovery is not a destination, it's a journey.",
  "Every step forward is progress.",
  "Your breakthrough is one day away.",
  "Healing happens here.",
  "New beginnings start today.",
];

const RehabCard: React.FC<{ rehab: Rehab }> = ({ rehab }) => {
  const images = getRehabImages(rehab).slice(0, 2);
  const [imgLoaded, setImgLoaded] = useState(Array(images.length).fill(false));
  const { selectedRehabs, setSelectedRehabs } = useRehabSearchContext();
  const isSelected = selectedRehabs.some((r) => r.id === rehab.id);

  // Insurance dropdown state
  const insuranceProviders = rehab.insuranceProviders || [];
  const [selectedInsurance, setSelectedInsurance] = useState<string>("");

  // Enhanced amenities display
  const amenities = (rehab.amenities || []).slice(0, 4);
  const levelsOfCare = (rehab.levels_of_care || []).slice(0, 2);

  // Star rating calculation
  let avgRating = undefined;
  let reviewCount = 0;
  if (Array.isArray(rehab.reviews) && rehab.reviews.length > 0) {
    avgRating =
      rehab.reviews.reduce((sum, r) => sum + (r.rating || 0), 0) /
      rehab.reviews.length;
    reviewCount = rehab.reviews.length;
  }

  // Random motivational quote
  const motivationalQuote =
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  // Heart click handler
  const handleHeartClick = () => {
    if (isSelected) {
      setSelectedRehabs(selectedRehabs.filter((r) => r.id !== rehab.id));
    } else {
      setSelectedRehabs([...selectedRehabs, rehab]);
    }
  };

  return (
    <Card className="relative w-full max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white via-white to-blue-50/30 overflow-hidden">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

      {/* Heart button with enhanced styling */}
      <button
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-all duration-200 hover:scale-110"
        onClick={handleHeartClick}
        aria-label={isSelected ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          className={`h-5 w-5 transition-all duration-200 ${
            isSelected
              ? "fill-red-500 text-red-500 scale-110"
              : "text-gray-400 hover:text-red-400"
          }`}
        />
      </button>

      {/* Enhanced image carousel */}
      <Carousel className="w-full mb-4" opts={{ align: "start" }}>
        <CarouselContent className="-ml-2">
          {images.map((src, idx) => (
            <CarouselItem key={src} className="pl-2 basis-1/2">
              <div className="relative h-48 w-full group">
                {!imgLoaded[idx] && (
                  <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
                )}
                <Image
                  src={src}
                  alt={rehab.name || "Treatment facility"}
                  fill
                  className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                  onLoad={() =>
                    setImgLoaded((prev) => {
                      const arr = [...prev];
                      arr[idx] = true;
                      return arr;
                    })
                  }
                />
                {/* Overlay with motivational text on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-xs font-medium p-3 text-center w-full">
                    {motivationalQuote}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/80 hover:bg-white border-0 shadow-md" />
        <CarouselNext className="bg-white/80 hover:bg-white border-0 shadow-md" />
      </Carousel>

      <CardContent className="pt-0 pb-4 px-6">
        {/* Location with enhanced styling */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-medium">{rehab.address}</span>
        </div>

        {/* Name and rating section */}
        <div className="flex items-start justify-between mb-3">
          <CardTitle className="text-xl font-bold text-gray-900 leading-tight flex-1 pr-4">
            {rehab.name}
          </CardTitle>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-sm text-yellow-700">
              {typeof avgRating === "number" ? avgRating.toFixed(1) : "New"}
            </span>
            {reviewCount > 0 && (
              <span className="text-xs text-yellow-600 ml-1">
                ({reviewCount})
              </span>
            )}
          </div>
        </div>

        {/* Levels of care badges */}
        {levelsOfCare.length > 0 && (
          <div className="flex gap-2 mb-3">
            {levelsOfCare.map((level) => (
              <Badge
                key={level.name}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
              >
                {level.name}
              </Badge>
            ))}
          </div>
        )}

        {/* Insurance section with enhanced styling */}
        <div className="mb-4">
          <Select
            value={selectedInsurance}
            onValueChange={setSelectedInsurance}
          >
            <SelectTrigger className="w-full bg-white border-2 border-gray-100 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <SelectValue placeholder="Check Insurance Coverage" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {insuranceProviders.length === 0 ? (
                <SelectItem value="none" disabled>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Call for insurance verification</span>
                  </div>
                </SelectItem>
              ) : (
                insuranceProviders.map((ip) => (
                  <SelectItem key={ip.name} value={ip.name}>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{ip.name}</span>
                    </div>
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Description with better typography */}
        <div className="text-sm text-gray-700 mb-4 leading-relaxed min-h-[3em]">
          {rehab.description ||
            "A dedicated treatment facility focused on your recovery journey."}
        </div>

        {/* Enhanced amenities section */}
        <div className="flex flex-wrap gap-3 mb-4">
          {amenities.map((amenity) => {
            const Icon = amenityIconMap[amenity.name] || CheckCircle;
            return (
              <div
                key={amenity.name}
                className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full text-xs hover:bg-primary/10 transition-colors"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="font-medium text-gray-700">
                  {amenity.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Call-to-action section */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4" />
            <span>Learn more about this facility</span>
          </div>
          <div className="text-xs text-primary font-medium">
            {isSelected ? "✓ Added to favorites" : "Click ♡ to save"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RehabCard;
