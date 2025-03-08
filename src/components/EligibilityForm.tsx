"use client";
import { useState } from "react";
import { usePayerRehab } from "../../hooks/usePayersAndRehabs";
import {
  submitEligibilityInquiry,
  getEligibilityResponse,
} from "../../pVerifyUtilities/pVerifyApiUtilities";

// List of all 50 US states
const US_STATES = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

export default function EligibilityForm() {
  const { payers, rehabs, filteredRehabs, setFilter } = usePayerRehab();
  const [useCustomPayer, setUseCustomPayer] = useState(false);
  const [useCustomProvider, setUseCustomProvider] = useState(false);
  const [selectedState, setSelectedState] = useState(""); // State filter
  const [isFiltered, setIsFiltered] = useState(false);
  const [zip, setZip] = useState(""); // Zip filter
  const [formData, setFormData] = useState({
    payerCode: "",
    selectedRehabId: "",
    customProviderFirstName: "",
    customProviderLastName: "",
    customProviderNpi: "",
    subscriberFirstName: "",
    subscriberLastName: "",
    subscriberDob: "",
    subscriberMemberID: "",
    doS_StartDate: new Date().toISOString().split("T")[0],
    doS_EndDate: new Date().toISOString().split("T")[0],
    referenceId: "REF" + Date.now(),
  });

  const [loading, setLoading] = useState(false);
  const [eligibilityResult, setEligibilityResult] = useState(null);

  // Function to update filter state
  const handleFilterChange = () => {
    const newFilter = {};
    if (selectedState) newFilter.state = selectedState;
    if (zip) newFilter.zip = zip;
    setFilter(newFilter);
  };

  // State change handler
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setFilter((curr) => ({ ...curr, state: e.target.value }));
    handleFilterChange();
  };

  // Zip change handler
  const handleZipChange = (e) => {
    setZip(e.target.value);
    handleFilterChange();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Get selected rehab details or use custom provider details
    const selectedRehab = rehabs.find(
      (r) => r.id === parseInt(formData.selectedRehabId)
    );

    const requestData = {
      payerCode: formData.payerCode,
      provider: {
        firstName: useCustomProvider
          ? formData.customProviderFirstName
          : selectedRehab?.provider_first_name || "",
        middleName: "",
        lastName: useCustomProvider
          ? formData.customProviderLastName
          : selectedRehab?.provider_last_name || "",
        npi: useCustomProvider
          ? formData.customProviderNpi
          : selectedRehab?.npi || "",
        pin: "00000",
      },
      subscriber: {
        firstName: formData.subscriberFirstName,
        middleName: "",
        lastName: formData.subscriberLastName,
        dob: formData.subscriberDob,
        memberID: formData.subscriberMemberID,
      },
      dependent: {
        patient: {
          firstName: "",
          middleName: "",
          lastName: "",
          dob: "",
          gender: "",
        },
        relationWithSubscriber: "",
      },
      isSubscriberPatient: true,
      doS_StartDate: formData.doS_StartDate,
      doS_EndDate: formData.doS_EndDate,
      serviceCodes: ["30"],
      isHMOplan: true,
      IncludeTextResponse: true,
      referenceId: formData.referenceId,
      Location: useCustomProvider
        ? `${formData.customProviderFirstName} ${formData.customProviderLastName}`
        : selectedRehab?.name1 || "",
    };

    const requestId = await submitEligibilityInquiry(requestData);
    if (requestId) {
      const response = await getEligibilityResponse(requestId);
      setEligibilityResult(response);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* FILTER SECTION */}
      <div className="mb-4">
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={isFiltered}
            onChange={() => setIsFiltered(!isFiltered)}
            className="mr-2"
          />
          Enable State Filtering
        </label>

        {isFiltered && (
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="block w-full p-2 border"
          >
            <option value="">Select a State</option>
            {US_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Filter by Zip Code</label>
        <input
          type="text"
          value={zip}
          onChange={handleZipChange}
          placeholder="Enter Zip Code"
          className="block w-full p-2 border"
        />
      </div>

      {/* FORM SECTION */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Payer Selection */}
        {useCustomPayer ? (
          <input
            type="text"
            name="payerCode"
            placeholder="Enter Payer Code"
            value={formData.payerCode}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
        ) : (
          <select
            name="payerCode"
            value={formData.payerCode}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          >
            <option value="">Select Payer</option>
            {payers.map((payer) => (
              <option key={payer.payer_code} value={payer.payer_code}>
                {payer.payer_name}
              </option>
            ))}
          </select>
        )}
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={useCustomPayer}
            onChange={() => setUseCustomPayer(!useCustomPayer)}
            className="mr-2"
          />
          Enter Payer Code Manually
        </label>

        {/* Provider Selection */}
        <div>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={useCustomProvider}
              onChange={() => setUseCustomProvider(!useCustomProvider)}
              className="mr-2"
            />
            Enter Provider Details Manually
          </label>

          {useCustomProvider ? (
            <div className="space-y-2">
              <input
                type="text"
                name="customProviderFirstName"
                placeholder="Provider First Name"
                value={formData.customProviderFirstName}
                onChange={handleChange}
                className="block w-full p-2 border"
                required
              />
              <input
                type="text"
                name="customProviderLastName"
                placeholder="Provider Last Name"
                value={formData.customProviderLastName}
                onChange={handleChange}
                className="block w-full p-2 border"
                required
              />
              <input
                type="text"
                name="customProviderNpi"
                placeholder="Provider NPI"
                value={formData.customProviderNpi}
                onChange={handleChange}
                className="block w-full p-2 border"
                required
              />
            </div>
          ) : (
            <select
              name="selectedRehabId"
              value={formData.selectedRehabId}
              onChange={handleChange}
              className="block w-full p-2 border"
              required
            >
              <option value="">Select Provider/Facility</option>
              {(isFiltered ? filteredRehabs : rehabs).map((rehab) => (
                <option key={rehab.id} value={rehab.id}>
                  {rehab.name1} - {rehab.city}, {rehab.state}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Service Dates */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="doS_StartDate"
            value={formData.doS_StartDate}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
          <input
            type="date"
            name="doS_EndDate"
            value={formData.doS_EndDate}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Eligibility"}
        </button>
      </form>

      <h6>{eligibilityResult ? JSON.stringify(eligibilityResult) : ""}</h6>
    </div>
  );
}
