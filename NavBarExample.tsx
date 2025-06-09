"use client";

import { useState } from "react";
import { Search, User, ChevronDown } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const AMENITIES = ["Ultra-Luxury", "Pet-Friendly", "Private Rooms", "Wellness"];
const SETTINGS = ["Beach", "Mountains", "Lake", "Urban"];
const LEVELS_OF_CARE = ["Detox", "Residential", "Outpatient", "Telehealth"];
const INSURANCE = ["Aetna", "BlueCross", "United Healthcare"];

export default function RecoveryCenterNavbar() {
  const [isAddictionHovered, setIsAddictionHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [selections, setSelections] = useState({
    Location: "",
    Amenities: "",
    Settings: "",
    Levels_Of_Care: "",
    Insurance: "",
  });
  const [isSelectionsVisible, setIsSelectionsVisible] = useState(false);

  const handleSelection = (
    category: keyof typeof selections,
    value: string
  ) => {
    setSelections((prev) => ({
      ...prev,
      [category]: value,
    }));
    setIsSelectionsVisible(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "United States":
        return (
          <div className="p-6">
            <div className="grid grid-cols-4 gap-2 max-h-80 overflow-y-auto">
              {US_STATES.map((state) => (
                <button
                  key={state}
                  onClick={() => handleSelection("Location", state)}
                  className="text-left p-2 hover:bg-gray-100 rounded text-sm transition-colors"
                >
                  {state}
                </button>
              ))}
            </div>
            <Link
              href="#"
              className="block mt-4 pt-4 border-t text-blue-600 hover:text-blue-800 font-medium"
            >
              Browse All States
            </Link>
          </div>
        );
      case "Amenities":
        return (
          <div className="p-6">
            <div className="space-y-2">
              {AMENITIES.map((amenity) => (
                <button
                  key={amenity}
                  onClick={() => handleSelection("Amenities", amenity)}
                  className="block text-left p-2 hover:bg-gray-100 rounded w-full transition-colors"
                >
                  {amenity}
                </button>
              ))}
            </div>
            <Link
              href="#"
              className="block mt-4 pt-4 border-t text-blue-600 hover:text-blue-800 font-medium"
            >
              Browse All Amenities
            </Link>
          </div>
        );
      case "Settings":
        return (
          <div className="p-6">
            <div className="space-y-2">
              {SETTINGS.map((setting) => (
                <button
                  key={setting}
                  onClick={() => handleSelection("Settings", setting)}
                  className="block text-left p-2 hover:bg-gray-100 rounded w-full transition-colors"
                >
                  {setting}
                </button>
              ))}
            </div>
            <Link
              href="#"
              className="block mt-4 pt-4 border-t text-blue-600 hover:text-blue-800 font-medium"
            >
              Browse All Settings
            </Link>
          </div>
        );
      case "Levels Of Care":
        return (
          <div className="p-6">
            <div className="space-y-2">
              {LEVELS_OF_CARE.map((level) => (
                <button
                  key={level}
                  onClick={() => handleSelection("Levels_Of_Care", level)}
                  className="block text-left p-2 hover:bg-gray-100 rounded w-full transition-colors"
                >
                  {level}
                </button>
              ))}
            </div>
            <Link
              href="#"
              className="block mt-4 pt-4 border-t text-blue-600 hover:text-blue-800 font-medium"
            >
              Browse All Levels Of Care
            </Link>
          </div>
        );
      case "Insurance":
        return (
          <div className="p-6">
            <div className="space-y-2">
              {INSURANCE.map((provider) => (
                <button
                  key={provider}
                  onClick={() => handleSelection("Insurance", provider)}
                  className="block text-left p-2 hover:bg-gray-100 rounded w-full transition-colors"
                >
                  {provider}
                </button>
              ))}
            </div>
            <Link
              href="#"
              className="block mt-4 pt-4 border-t text-blue-600 hover:text-blue-800 font-medium"
            >
              Browse All Insurance Provider Acceptance
            </Link>
          </div>
        );
      default:
        return null;
    }
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
              />
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

              {/* Dropdown Menu - moved inside the container */}
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
                          {[
                            "United States",
                            "Amenities",
                            "Settings",
                            "Levels Of Care",
                            "Insurance",
                          ].map((tab) => (
                            <button
                              key={tab}
                              onMouseEnter={() => setActiveTab(tab)}
                              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                activeTab === tab
                                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              {tab}
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
            <div>
              <span className="font-medium">Location:</span>{" "}
              {selections.Location || "None"}
            </div>
            <div>
              <span className="font-medium">Amenities:</span>{" "}
              {selections.Amenities || "None"}
            </div>
            <div>
              <span className="font-medium">Settings:</span>{" "}
              {selections.Settings || "None"}
            </div>
            <div>
              <span className="font-medium">Levels of Care:</span>{" "}
              {selections.Levels_Of_Care || "None"}
            </div>
            <div>
              <span className="font-medium">Insurance:</span>{" "}
              {selections.Insurance || "None"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
