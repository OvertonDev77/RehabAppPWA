import * as React from "react";
import { useAllPayers, Payer } from "@/hooks/apolloHooks/rehabHooks";
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
import {
  ChevronsUpDown,
  Search,
  AlertCircle,
  Building2,
  X,
} from "lucide-react";

export default function InsuranceProviderSearch() {
  const { loading, error, payers } = useAllPayers();
  const [inputValue, setInputValue] = React.useState("");
  const [selectedPayer, setSelectedPayer] = React.useState<Payer | null>(null);
  const [showDropdown, setShowDropdown] = React.useState(false);

  // Filter payers based on input value for real-time search
  const filteredPayers = React.useMemo(() => {
    if (!inputValue.trim()) return [] as Payer[];
    const searchTerm = inputValue.toLowerCase();
    return payers.filter(
      (payer: Payer) =>
        payer.payer_name.toLowerCase().includes(searchTerm) ||
        payer.type.toLowerCase().includes(searchTerm) ||
        (payer.state || "").toLowerCase().includes(searchTerm)
    );
  }, [inputValue, payers]);

  // Show all payers when dropdown is open, otherwise filtered
  // const displayPayers = showDropdown ? payers : filteredPayers;

  const handlePayerSelect = (payer: Payer) => {
    setSelectedPayer(payer);
    setInputValue(payer.payer_name);
    setShowDropdown(false);
  };

  const clearSelection = () => {
    setSelectedPayer(null);
    setInputValue("");
    setShowDropdown(false);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setShowDropdown(false);
    if (!value.trim()) setSelectedPayer(null);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) setInputValue("");
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
            <Badge className="bg-blue-100 text-blue-800">Insurance</Badge>
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
                    disabled={loading}
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={handleDropdownToggle}
                  className="ml-2 h-12 px-3"
                  disabled={loading}
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
                          key={payer.payer_code}
                          onClick={() => handlePayerSelect(payer)}
                          className="w-full text-left p-3 hover:bg-muted rounded-md transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">
                                  {payer.payer_name}
                                </span>
                                <Badge
                                  variant="secondary"
                                  className={getPayerTypeColor(payer.type)}
                                >
                                  {payer.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {payer.state || payer.eligibility}
                              </p>
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
                    <div className="px-2 py-2 text-sm font-medium text-muted-foreground">
                      All Providers ({payers.length})
                    </div>
                    {payers.map((payer) => (
                      <button
                        key={payer.payer_code}
                        onClick={() => handlePayerSelect(payer)}
                        className="w-full text-left p-3 hover:bg-muted rounded-md transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                {payer.payer_name}
                              </span>
                              <Badge
                                variant="secondary"
                                className={getPayerTypeColor(payer.type)}
                              >
                                {payer.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {payer.state || payer.eligibility}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          )}
          {loading && (
            <Alert>
              <Search className="h-4 w-4 animate-spin" />
              <AlertDescription>
                Loading insurance providers...
              </AlertDescription>
            </Alert>
          )}
          {selectedPayer && !loading && (
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
                  <p className="font-medium">{selectedPayer.payer_name}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">TYPE</Label>
                  <div className="flex items-center gap-2">
                    <Badge className={getPayerTypeColor(selectedPayer.type)}>
                      {selectedPayer.type}
                    </Badge>
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">
                    ELIGIBILITY
                  </Label>
                  <p className="text-sm">{selectedPayer.eligibility}</p>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">
                    CLAIM STATUS
                  </Label>
                  <p className="text-sm">{selectedPayer.claim_status}</p>
                </div>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">STATE</Label>
                <div className="flex flex-wrap gap-1 mt-1">
                  <Badge variant="outline" className="text-xs">
                    {selectedPayer.state || "N/A"}
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
