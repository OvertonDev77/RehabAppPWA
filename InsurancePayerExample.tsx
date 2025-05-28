"use client";

import * as React from "react";
import {
  ChevronsUpDown,
  Search,
  AlertCircle,
  Building2,
  Shield,
  X,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Mock insurance payer data with popularity scores
const insurancePayers = [
  {
    id: "blue-cross",
    name: "Blue Cross Blue Shield",
    fullName: "Blue Cross Blue Shield Association",
    type: "Commercial",
    coverage: "National",
    phone: "1-888-630-2583",
    website: "www.bcbs.com",
    acceptanceRate: 98,
    popularity: 10, // Most popular
    description: "Trusted health insurance for over 90 years",
    planTypes: ["HMO", "PPO", "EPO", "POS", "HDHP"],
  },
  {
    id: "united-healthcare",
    name: "United Healthcare",
    fullName: "UnitedHealth Group",
    type: "Commercial",
    coverage: "National",
    phone: "1-888-815-3292",
    website: "www.uhc.com",
    acceptanceRate: 94,
    popularity: 9,
    description: "Largest health insurance company in the United States",
    planTypes: ["HMO", "PPO", "EPO", "POS", "HDHP"],
  },
  {
    id: "aetna",
    name: "Aetna",
    fullName: "Aetna Inc.",
    type: "Commercial",
    coverage: "National",
    phone: "1-800-872-3862",
    website: "www.aetna.com",
    acceptanceRate: 95,
    popularity: 8,
    description: "One of the largest health insurance companies in the US",
    planTypes: ["HMO", "PPO", "EPO", "POS"],
  },
  {
    id: "anthem",
    name: "Anthem",
    fullName: "Anthem Blue Cross Blue Shield",
    type: "Commercial",
    coverage: "Multi-State",
    phone: "1-800-331-1476",
    website: "www.anthem.com",
    acceptanceRate: 92,
    popularity: 7,
    description: "Leading health benefits company serving millions of members",
    planTypes: ["HMO", "PPO", "EPO"],
  },
  {
    id: "cigna",
    name: "Cigna",
    fullName: "Cigna Healthcare",
    type: "Commercial",
    coverage: "National",
    phone: "1-800-244-6224",
    website: "www.cigna.com",
    acceptanceRate: 89,
    popularity: 6,
    description: "Global health service company improving health outcomes",
    planTypes: ["HMO", "PPO", "EPO"],
  },
  {
    id: "medicare",
    name: "Medicare",
    fullName: "Centers for Medicare & Medicaid Services",
    type: "Government",
    coverage: "National",
    phone: "1-800-633-4227",
    website: "www.medicare.gov",
    acceptanceRate: 99,
    popularity: 9,
    description: "Federal health insurance program for people 65 or older",
    planTypes: ["Part A", "Part B", "Part C", "Part D"],
  },
  {
    id: "humana",
    name: "Humana",
    fullName: "Humana Inc.",
    type: "Commercial",
    coverage: "National",
    phone: "1-800-448-6262",
    website: "www.humana.com",
    acceptanceRate: 87,
    popularity: 5,
    description:
      "Health and well-being company focused on making healthcare simpler",
    planTypes: ["HMO", "PPO", "EPO", "Medicare Advantage"],
  },
  {
    id: "kaiser",
    name: "Kaiser Permanente",
    fullName: "Kaiser Foundation Health Plan",
    type: "HMO",
    coverage: "Regional",
    phone: "1-800-464-4000",
    website: "www.kp.org",
    acceptanceRate: 88,
    popularity: 6,
    description: "Integrated managed care consortium based in California",
    planTypes: ["HMO", "Deductible HMO"],
  },
  {
    id: "medicaid",
    name: "Medicaid",
    fullName: "State Medicaid Programs",
    type: "Government",
    coverage: "State-Based",
    phone: "Varies by State",
    website: "www.medicaid.gov",
    acceptanceRate: 96,
    popularity: 8,
    description: "Joint federal and state program for low-income individuals",
    planTypes: ["Traditional", "Managed Care"],
  },
  {
    id: "tricare",
    name: "TRICARE",
    fullName: "TRICARE Health Plan",
    type: "Government",
    coverage: "Military",
    phone: "1-800-444-5445",
    website: "www.tricare.mil",
    acceptanceRate: 91,
    popularity: 4,
    description:
      "Health care program for uniformed service members and families",
    planTypes: ["Prime", "Select", "Reserve Select"],
  },
  {
    id: "molina",
    name: "Molina Healthcare",
    fullName: "Molina Healthcare Inc.",
    type: "Medicaid",
    coverage: "Multi-State",
    phone: "1-888-562-5442",
    website: "www.molinahealthcare.com",
    acceptanceRate: 85,
    popularity: 3,
    description: "Healthcare organization serving low-income families",
    planTypes: ["Medicaid", "Medicare", "Marketplace"],
  },
  {
    id: "centene",
    name: "Centene",
    fullName: "Centene Corporation",
    type: "Medicaid",
    coverage: "Multi-State",
    phone: "1-800-984-4663",
    website: "www.centene.com",
    acceptanceRate: 86,
    popularity: 3,
    description:
      "Multi-national healthcare enterprise providing government-sponsored programs",
    planTypes: ["Medicaid", "Medicare", "Marketplace"],
  },
  {
    id: "bcbs-florida",
    name: "BCBS Florida",
    fullName: "Blue Cross Blue Shield of Florida",
    type: "Commercial",
    coverage: "Florida",
    phone: "1-800-477-3736",
    website: "www.floridablue.com",
    acceptanceRate: 93,
    popularity: 5,
    description: "Florida's Blue Cross and Blue Shield plan",
    planTypes: ["HMO", "PPO", "EPO"],
  },
  {
    id: "bcbs-texas",
    name: "BCBS Texas",
    fullName: "Blue Cross Blue Shield of Texas",
    type: "Commercial",
    coverage: "Texas",
    phone: "1-800-521-2227",
    website: "www.bcbstx.com",
    acceptanceRate: 91,
    popularity: 4,
    description: "Texas Blue Cross and Blue Shield plan",
    planTypes: ["HMO", "PPO", "EPO"],
  },
  {
    id: "healthnet",
    name: "Health Net",
    fullName: "Health Net Inc.",
    type: "Commercial",
    coverage: "Multi-State",
    phone: "1-800-522-0088",
    website: "www.healthnet.com",
    acceptanceRate: 84,
    popularity: 2,
    description: "Health insurance and managed healthcare company",
    planTypes: ["HMO", "PPO", "EPO"],
  },
];

type InsurancePayer = (typeof insurancePayers)[0];

export default function InsurancePayerSelect() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [selectedPayer, setSelectedPayer] =
    React.useState<InsurancePayer | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [memberIdInput, setMemberIdInput] = React.useState("");
  const [groupNumberInput, setGroupNumberInput] = React.useState("");
  const [showDropdown, setShowDropdown] = React.useState(false);

  // Sort payers by popularity (highest first)
  const sortedPayers = React.useMemo(() => {
    return [...insurancePayers].sort((a, b) => b.popularity - a.popularity);
  }, []);

  // Get popular payers (top 6)
  const popularPayers = React.useMemo(() => {
    return sortedPayers.slice(0, 6);
  }, [sortedPayers]);

  // Filter payers based on input value for real-time search
  const filteredPayers = React.useMemo(() => {
    if (!inputValue.trim()) return [];

    const searchTerm = inputValue.toLowerCase();
    const matches = insurancePayers.filter(
      (payer) =>
        payer.name.toLowerCase().includes(searchTerm) ||
        payer.fullName.toLowerCase().includes(searchTerm) ||
        payer.type.toLowerCase().includes(searchTerm) ||
        payer.planTypes.some((plan) => plan.toLowerCase().includes(searchTerm))
    );

    // Sort matches by popularity
    return matches.sort((a, b) => b.popularity - a.popularity);
  }, [inputValue]);

  // Show real-time results when typing, all options when dropdown is opened
  const displayPayers = React.useMemo(() => {
    if (showDropdown) {
      return sortedPayers; // Show all options sorted by popularity
    }
    return filteredPayers; // Show filtered results when typing
  }, [showDropdown, sortedPayers, filteredPayers]);

  // Simulate API call for payer validation
  const validatePayer = async (payer: InsurancePayer) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Simulate random validation failure for demo
      if (Math.random() < 0.05) {
        throw new Error(
          "Unable to verify insurance coverage. Please check your information."
        );
      }

      setSelectedPayer(payer);
      setInputValue(payer.name);
      setShowDropdown(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Validation failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayerSelect = (payer: InsurancePayer) => {
    validatePayer(payer);
  };

  const clearSelection = () => {
    setSelectedPayer(null);
    setInputValue("");
    setMemberIdInput("");
    setGroupNumberInput("");
    setError(null);
    setShowDropdown(false);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setShowDropdown(false); // Hide dropdown when typing
    if (!value.trim()) {
      setSelectedPayer(null);
    }
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      setInputValue(""); // Clear input when opening dropdown
    }
  };

  const getPayerTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "commercial":
        return "bg-blue-100 text-blue-800";
      case "government":
        return "bg-green-100 text-green-800";
      case "hmo":
        return "bg-purple-100 text-purple-800";
      case "medicaid":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const isPopular = (payer: InsurancePayer) => payer.popularity >= 6;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Insurance Verification
        </h1>
        <p className="text-muted-foreground">
          Type to search or browse all insurance providers to verify coverage
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Insurance Provider
          </CardTitle>
          <CardDescription>
            Start typing your insurance name or click the dropdown to browse all
            options
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="insurance-input">Insurance Provider *</Label>
            <div className="relative">
              <div className="flex">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="insurance-input"
                    placeholder="Type your insurance provider name..."
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="pl-10 pr-12 h-12"
                    disabled={isLoading}
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={handleDropdownToggle}
                  className="ml-2 h-12 px-3"
                  disabled={isLoading}
                >
                  <ChevronsUpDown className="h-4 w-4" />
                </Button>
              </div>

              {/* Real-time search results */}
              {inputValue.trim() && !showDropdown && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border rounded-md shadow-lg max-h-80 overflow-auto">
                  {filteredPayers.length === 0 ? (
                    <div className="flex flex-col items-center gap-2 py-8">
                      <AlertCircle className="h-8 w-8 text-muted-foreground" />
                      <div className="text-center">
                        <p className="font-medium">No matches found</p>
                        <p className="text-sm text-muted-foreground">
                          Try different keywords or browse all options
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-2">
                      <div className="text-xs text-muted-foreground px-2 py-1 mb-2">
                        {filteredPayers.length} result
                        {filteredPayers.length !== 1 ? "s" : ""} found
                      </div>
                      {filteredPayers.map((payer) => (
                        <button
                          key={payer.id}
                          onClick={() => handlePayerSelect(payer)}
                          className="w-full text-left p-3 hover:bg-muted rounded-md transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">
                                  {payer.name}
                                </span>
                                {isPopular(payer) && (
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                )}
                                <Badge
                                  variant="secondary"
                                  className={getPayerTypeColor(payer.type)}
                                >
                                  {payer.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {payer.fullName}
                              </p>
                              <div className="flex items-center gap-4 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  {payer.coverage}
                                </span>
                                <span className="text-xs text-green-600">
                                  {payer.acceptanceRate}% acceptance
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Dropdown with all options */}
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border rounded-md shadow-lg max-h-96 overflow-auto">
                  <div className="p-2">
                    {/* Popular section */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-muted-foreground">
                        <Star className="h-4 w-4" />
                        Popular Providers
                      </div>
                      {popularPayers.map((payer) => (
                        <button
                          key={payer.id}
                          onClick={() => handlePayerSelect(payer)}
                          className="w-full text-left p-3 hover:bg-muted rounded-md transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">
                                  {payer.name}
                                </span>
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <Badge
                                  variant="secondary"
                                  className={getPayerTypeColor(payer.type)}
                                >
                                  {payer.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {payer.coverage}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* All providers section */}
                    <div className="border-t pt-2">
                      <div className="px-2 py-2 text-sm font-medium text-muted-foreground">
                        All Providers ({sortedPayers.length})
                      </div>
                      {sortedPayers.map((payer) => (
                        <button
                          key={payer.id}
                          onClick={() => handlePayerSelect(payer)}
                          className="w-full text-left p-3 hover:bg-muted rounded-md transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">
                                  {payer.name}
                                </span>
                                {isPopular(payer) && (
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                )}
                                <Badge
                                  variant="secondary"
                                  className={getPayerTypeColor(payer.type)}
                                >
                                  {payer.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {payer.fullName}
                              </p>
                              <div className="flex items-center gap-4 mt-1">
                                <span className="text-xs text-muted-foreground">
                                  {payer.coverage}
                                </span>
                                <span className="text-xs text-green-600">
                                  {payer.acceptanceRate}% acceptance
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {isLoading && (
            <Alert>
              <Search className="h-4 w-4 animate-spin" />
              <AlertDescription>
                Verifying insurance coverage...
              </AlertDescription>
            </Alert>
          )}

          {selectedPayer && !isLoading && (
            <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Selected Insurance Provider</h3>
                <Button variant="ghost" size="sm" onClick={clearSelection}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-muted-foreground">
                    PROVIDER
                  </Label>
                  <p className="font-medium">{selectedPayer.fullName}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">TYPE</Label>
                  <div className="flex items-center gap-2">
                    <Badge className={getPayerTypeColor(selectedPayer.type)}>
                      {selectedPayer.type}
                    </Badge>
                    {isPopular(selectedPayer) && (
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    )}
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">
                    COVERAGE
                  </Label>
                  <p className="text-sm">{selectedPayer.coverage}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">
                    ACCEPTANCE RATE
                  </Label>
                  <p className="text-sm text-green-600">
                    {selectedPayer.acceptanceRate}%
                  </p>
                </div>
              </div>

              <div>
                <Label className="text-xs text-muted-foreground">
                  PLAN TYPES
                </Label>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedPayer.planTypes.map((plan) => (
                    <Badge key={plan} variant="outline" className="text-xs">
                      {plan}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                {selectedPayer.description}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {selectedPayer && (
        <Card>
          <CardHeader>
            <CardTitle>Insurance Details</CardTitle>
            <CardDescription>
              Please provide your insurance information for verification
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="member-id">Member ID *</Label>
                <Input
                  id="member-id"
                  placeholder="Enter your member ID"
                  value={memberIdInput}
                  onChange={(e) => setMemberIdInput(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="group-number">Group Number</Label>
                <Input
                  id="group-number"
                  placeholder="Enter group number (if applicable)"
                  value={groupNumberInput}
                  onChange={(e) => setGroupNumberInput(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button className="flex-1" disabled={!memberIdInput.trim()}>
                Verify Coverage
              </Button>
              <Button variant="outline" onClick={clearSelection}>
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
