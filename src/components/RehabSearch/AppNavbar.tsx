import React, { useState } from "react";
import Link from "next/link";
import { User, Heart, Search, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRehabSearchContext } from "./context/RehabSearchContext";
import Image from "next/image";

// Helper: get fallback Unsplash images with medical/wellness themes
const getFallbackImages = (count = 1) =>
  [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
  ].slice(0, count);

function getRehabImages(rehab: unknown): string[] {
  const photos = (rehab as { photos?: string | string[] }).photos;
  if (Array.isArray(photos) && photos.length > 0) {
    return photos;
  }
  if (typeof photos === "string" && photos.length > 0) {
    return [photos];
  }
  return getFallbackImages(1);
}

export default function AppNavbar() {
  const { selectedRehabs } = useRehabSearchContext();
  const [showSelectedPopover, setShowSelectedPopover] = useState(false);

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Recovery Hub
              </span>
            </Link>
          </div>

          {/* Centered Search Bar */}
          <div className="flex-1 flex justify-center max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search treatment centers, locations, or services..."
                className="pl-10 w-full bg-gray-50 border-2 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            <Link
              href="/admissions"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Admissions
            </Link>

            <Link
              href="/aiPlayground"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              AI Assistant
            </Link>

            <Link
              href="/resources"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Resources
            </Link>

            {/* Selected Rehabs Icon with Enhanced Badge */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSelectedPopover((v) => !v)}
                aria-label={`View ${selectedRehabs.length} selected treatment centers`}
                className="relative hover:bg-primary/10 transition-colors"
              >
                <Heart
                  className={`h-5 w-5 transition-all ${
                    selectedRehabs.length > 0
                      ? "text-red-500 fill-red-500 scale-110"
                      : "text-gray-400 hover:text-red-400"
                  }`}
                />
                {selectedRehabs.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1.5 py-0.5 min-w-[20px] text-center font-bold animate-pulse">
                    {selectedRehabs.length}
                  </span>
                )}
              </Button>

              {/* Enhanced Popover for selected rehabs */}
              {showSelectedPopover && (
                <div className="absolute right-0 mt-2 w-96 bg-white border-0 shadow-xl rounded-lg z-50 overflow-hidden">
                  {selectedRehabs.length > 0 ? (
                    <>
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 border-b">
                        <div className="flex items-center gap-2">
                          <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                          <h4 className="font-bold text-lg text-primary">
                            Your Favorites
                          </h4>
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-bold">
                            {selectedRehabs.length}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Treatment centers you&apos;re considering
                        </p>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {selectedRehabs.map((rehab, index) => {
                          const images = getRehabImages(rehab);
                          return (
                            <div
                              key={rehab.id}
                              className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b last:border-b-0"
                            >
                              <div className="relative">
                                <Image
                                  src={images[0]}
                                  alt={rehab.name || "Treatment center"}
                                  className="w-16 h-16 object-cover rounded-lg shadow-sm"
                                  width={64}
                                  height={64}
                                />
                                <div className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                  {index + 1}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm text-gray-900 truncate">
                                  {rehab.name}
                                </div>
                                <div className="text-xs text-muted-foreground truncate">
                                  {rehab.address}
                                </div>
                                <div className="text-xs text-primary font-medium mt-1">
                                  Ready to start admissions?
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="p-4 bg-gray-50 border-t">
                        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                          Compare Selected Centers
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="p-6 text-center">
                      <Heart className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">
                        No favorites yet
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Click the ♡ on treatment centers to save them here
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 transition-colors"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 px-6 py-2">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-sm text-muted-foreground">
              <span className="font-medium text-primary">
                🌟 Your recovery journey starts here.
              </span>{" "}
              Find the perfect treatment center that matches your needs and take
              the first step towards healing.
            </p>
          </div>
        </div>
      </nav>

      {/* Click outside to close popover */}
      {showSelectedPopover && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowSelectedPopover(false)}
        />
      )}
    </div>
  );
}
