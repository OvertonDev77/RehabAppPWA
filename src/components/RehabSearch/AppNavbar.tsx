import React, { useState } from "react";
import Link from "next/link";
import { User, ChevronDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRehabSearchContext } from "./context/RehabSearchContext";
import { FilterSelections, FilterCategoryKey } from "./context/types";
import Image from "next/image";

const CATEGORY_MAP = [
  { label: "United States", key: "states" },
  { label: "Amenities", key: "amenities" },
  { label: "Settings", key: "settings" },
  { label: "Levels Of Care", key: "levelsOfCare" },
  { label: "Insurance", key: "insuranceProviders" },
];

// Helper: get fallback Unsplash images
const getFallbackImages = (count = 3) =>
  [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
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
  const { selections, setSelections, filterOptions, selectedRehabs } =
    useRehabSearchContext();
  const [isAddictionHovered, setIsAddictionHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showSelectedPopover, setShowSelectedPopover] = useState(false);

  const handleSelection = (categoryKey: FilterCategoryKey, value: string) => {
    const newSelections: FilterSelections = {
      ...selections,
      [categoryKey]: [value],
    };
    setSelections(newSelections);
  };

  const renderTabContent = () => {
    const cat = CATEGORY_MAP.find((c) => c.label === activeTab);
    if (!cat) return null;
    const options = filterOptions[cat.key as keyof typeof filterOptions] || [];
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-80 overflow-y-auto">
          {options.map((option: string) => (
            <button
              key={option}
              onClick={() =>
                handleSelection(cat.key as FilterCategoryKey, option)
              }
              className={`text-left p-2 rounded text-sm transition-colors ${
                selections[cat.key as keyof typeof selections][0] === option
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              The Rehab App
            </Link>
          </div>

          {/* Centered Search Bar */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md">
              <Input
                type="text"
                placeholder="Search recovery centers..."
                className="pl-10 w-full"
                // onChange={...} // search logic not implemented yet
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            <div
              className="relative"
              onMouseEnter={() => setIsAddictionHovered(true)}
              onMouseLeave={() => {
                setIsAddictionHovered(false);
                setActiveTab(null);
              }}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Addiction</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              {isAddictionHovered && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-6xl bg-white border border-gray-200 shadow-lg z-50 mt-2">
                  <div className="px-6 py-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                      Find Treatment By
                    </h2>
                    <div className="flex">
                      {/* Vertical Tabs */}
                      <div className="w-64 border-r border-gray-200 pr-6">
                        <div className="space-y-2">
                          {CATEGORY_MAP.map((tab) => (
                            <button
                              key={tab.label}
                              onMouseEnter={() => setActiveTab(tab.label)}
                              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                activeTab === tab.label
                                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      {/* Tab Content */}
                      <div className="flex-1">{renderTabContent()}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/resources"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Resources
            </Link>

            {/* Selected Rehabs Icon with Badge */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSelectedPopover((v) => !v)}
                aria-label="View selected rehabs"
              >
                <Heart
                  className={
                    selectedRehabs.length > 0 ? "text-red-500" : "text-gray-400"
                  }
                />
                {selectedRehabs.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1.5 py-0.5">
                    {selectedRehabs.length}
                  </span>
                )}
              </Button>
              {/* Popover for selected rehabs */}
              {showSelectedPopover && selectedRehabs.length > 0 && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 shadow-lg rounded-lg z-50 p-4">
                  <h4 className="font-semibold mb-2">Selected Rehabs</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {selectedRehabs.map((rehab) => {
                      const images = getRehabImages(rehab);
                      return (
                        <div
                          key={rehab.id}
                          className="flex items-center gap-3 p-2 border rounded"
                        >
                          <Image
                            src={images[0]}
                            alt={rehab.name || "Rehab"}
                            className="w-12 h-12 object-cover rounded"
                            width={48}
                            height={48}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">
                              {rehab.name}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
