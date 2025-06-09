import React, { useState } from "react";
import Link from "next/link";
import { Search, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRehabSearchContext } from "./context/RehabSearchContext";
import { FilterSelections, FilterCategoryKey } from "./context/types";

const CATEGORY_MAP = [
  { label: "United States", key: "states" },
  { label: "Amenities", key: "amenities" },
  { label: "Settings", key: "settings" },
  { label: "Levels Of Care", key: "levelsOfCare" },
  { label: "Insurance", key: "insuranceProviders" },
];

export default function AppNavbar() {
  const { selections, setSelections, filterOptions } = useRehabSearchContext();
  const [isAddictionHovered, setIsAddictionHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isSelectionsVisible, setIsSelectionsVisible] = useState(false);
  const [fullSearchOpen, setFullSearchOpen] = useState(false);

  const handleSelection = (categoryKey: FilterCategoryKey, value: string) => {
    const newSelections: FilterSelections = {
      ...selections,
      [categoryKey]: [value],
    };
    setSelections(newSelections);
    setIsSelectionsVisible(true);
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
              RecoveryFinder
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search recovery centers..."
                className="pl-10 w-full"
                onClick={() => setFullSearchOpen(true)}
              />

              {fullSearchOpen && (
                <div className="relative grid-cols-1 grid-rows-3 bg-primary-100"></div>
              )}
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
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
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About us
            </Link>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Find Recovery Centers
        </h1>
        <p className="text-gray-600">
          Use the navigation above to filter recovery centers by location,
          amenities, settings, levels of care, and insurance acceptance.
        </p>
      </div>

      {/* Toggle Button for Selections */}
      <div className="fixed bottom-4 right-4">
        <Button
          onClick={() => setIsSelectionsVisible(true)}
          className="rounded-full shadow-lg"
          variant="default"
        >
          View Selections
        </Button>
      </div>

      {/* Current State Display - Now at the bottom */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-transform duration-300 ${
          isSelectionsVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-gray-600">
              Current Selections:
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSelectionsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
            {CATEGORY_MAP.map((cat) => (
              <div key={cat.key}>
                <span className="font-medium">{cat.label}:</span>{" "}
                {selections[cat.key as keyof typeof selections][0] || "None"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
