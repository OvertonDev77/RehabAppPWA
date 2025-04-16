"use client";
import { useState } from "react";
import { useRehabs, usePayers } from "../../hooks/usePayersAndRehabs";
import {
  submitEligibilityInquiry,
  getEligibilityResponse,
} from "../../pVerifyUtilities/pVerifyApiUtilities";

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
  const [isFiltered, setIsFiltered] = useState(false);
  const [filters, setFilters] = useState({ state: "" });
  const [useCustomPayer, setUseCustomPayer] = useState(false);
  const [useCustomProvider, setUseCustomProvider] = useState(false);
  const [useCustomSubscriber, setUseCustomSubscriber] = useState(true);
  const [selectedRehab, setSelectedRehab] = useState(null);

  // Apollo queries
  const { data: rehabData, loading: rehabsLoading } = useRehabs(
    isFiltered ? filters : {}
  );
  const { data: payerData, loading: payersLoading } = usePayers();

  const [formData, setFormData] = useState({
    payerCode: "",
    payerName: "",
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

  const handleStateChange = (e) => {
    setFilters((prev) => ({ ...prev, state: e.target.value }));
  };

  const handlePayerChange = (e) => {
    const { value } = e.target;
    const selectedPayer = payerData?.payers.find((p) => p.payer_code === value);

    setFormData((prev) => ({
      ...prev,
      payerCode: value,
      payerName: selectedPayer?.payer_name || "",
    }));
  };

  const handleRehabChange = (e) => {
    const { value } = e.target;
    const rehab = rehabData?.rehabs.find((r) => r.id === parseInt(value));

    setSelectedRehab(rehab);
    setFormData((prev) => ({
      ...prev,
      selectedRehabId: value,
      customProviderFirstName: rehab?.provider_first_name || "",
      customProviderLastName: rehab?.provider_last_name || "",
      customProviderNpi: rehab?.npi || "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const selectedRehab = rehabData?.rehabs.find(
      (r) => r.id === parseInt(formData.selectedRehabId)
    );

    const requestData = {
      payerCode: formData.payerCode,
      payerName: formData.payerName || "",
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
      },
      subscriber: {
        firstName: formData.subscriberFirstName,
        middleName: "",
        lastName: formData.subscriberLastName,
        dob: formData.subscriberDob,
        memberID: formData.subscriberMemberID,
      },
      dependent: null, // Must be explicitly null
      isSubscriberPatient: "True",
      doS_StartDate: formData.doS_StartDate,
      doS_EndDate: formData.doS_EndDate,
      PracticeTypeCode: "",
      referenceId: formData.referenceId,
      Location: useCustomProvider
        ? `${formData.customProviderFirstName} ${formData.customProviderLastName}`
        : selectedRehab?.name1 || "",
      IncludeTextResponse: "true",
      InternalId: "",
      CustomerID: "",
    };

    console.log("Submitting request:", requestData); // Debugging

    const requestId = await submitEligibilityInquiry(requestData);
    if (requestId) {
      const response = await getEligibilityResponse(requestId);
      console.log("RESPONSE-------------------------\n\n");
      console.log({ response });
      setEligibilityResult(response);
    }
    setLoading(false);
  };

  if (rehabsLoading || payersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Filter Controls */}
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
            value={filters.state}
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

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Payer Selection */}
        {useCustomPayer ? (
          <>
            <input
              type="text"
              name="payerCode"
              placeholder="Enter Payer Code"
              value={formData.payerCode}
              onChange={handlePayerChange}
              className="block w-full p-2 border"
              required
            />
            <input
              type="text"
              name="payerName"
              placeholder="Enter Payer Name"
              value={formData.payerName}
              onChange={handleChange}
              className="block w-full p-2 border"
              required
            />
          </>
        ) : (
          <select
            name="payerCode"
            value={formData.payerCode}
            onChange={handlePayerChange}
            className="block w-full p-2 border"
            required
          >
            <option value="">Select Payer</option>
            {payerData?.payers.map((payer) => (
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
          Enter Payer Details Manually
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
              onChange={handleRehabChange}
              className="block w-full p-2 border"
              required
            >
              <option value="">Select Provider/Facility</option>
              {rehabData?.rehabs.map((rehab) => (
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

        {/* Subscriber Information */}
        <div className="space-y-2">
          <input
            type="text"
            name="subscriberFirstName"
            placeholder="Subscriber First Name"
            value={formData.subscriberFirstName}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
          <input
            type="text"
            name="subscriberLastName"
            placeholder="Subscriber Last Name"
            value={formData.subscriberLastName}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
          <input
            type="date"
            name="subscriberDob"
            value={formData.subscriberDob}
            onChange={handleChange}
            className="block w-full p-2 border"
            required
          />
          <input
            type="text"
            name="subscriberMemberID"
            placeholder="Subscriber Member ID"
            value={formData.subscriberMemberID}
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
