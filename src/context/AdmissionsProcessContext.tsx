import React, { createContext, useContext, useState, ReactNode } from "react";
import type {
  Rehab,
  Payer,
  PrototypeRehabFilters,
} from "@/hooks/apolloHooks/rehabHooks";

// Types for the context state
interface UserLocation {
  latitude: number;
  longitude: number;
  radiusMiles?: number;
}

interface PreAssessment {
  [key: string]: unknown; // Expand as needed
}

interface GeneralUserInfo {
  name?: string;
  email?: string;
  phone?: string;
  dob?: string;
  [key: string]: unknown;
}

interface AdmissionsProcessState {
  selectedRehabs: Rehab[];
  setSelectedRehabs: (rehabs: Rehab[]) => void;
  selectedInsurancePayer: Payer | null;
  setSelectedInsurancePayer: (payer: Payer | null) => void;
  preAssessment: PreAssessment;
  setPreAssessment: (info: PreAssessment) => void;
  substanceAbuseDescription: string;
  setSubstanceAbuseDescription: (desc: string) => void;
  chosenFilters: PrototypeRehabFilters;
  setChosenFilters: (filters: PrototypeRehabFilters) => void;
  userLocation: UserLocation | null;
  setUserLocation: (loc: UserLocation | null) => void;
  generalUserInfo: GeneralUserInfo;
  setGeneralUserInfo: (info: GeneralUserInfo) => void;
  // Handler functions
  addSelectedRehab: (rehab: Rehab) => void;
  removeSelectedRehab: (rehabId: number) => void;
  clearSelectedRehabs: () => void;
}

const AdmissionsProcessContext = createContext<
  AdmissionsProcessState | undefined
>(undefined);

export function AdmissionsProcessProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedRehabs, setSelectedRehabs] = useState<Rehab[]>([]);
  const [selectedInsurancePayer, setSelectedInsurancePayer] =
    useState<Payer | null>(null);
  const [preAssessment, setPreAssessment] = useState<PreAssessment>({});
  const [substanceAbuseDescription, setSubstanceAbuseDescription] =
    useState<string>("");
  const [chosenFilters, setChosenFilters] = useState<PrototypeRehabFilters>({});
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [generalUserInfo, setGeneralUserInfo] = useState<GeneralUserInfo>({});

  // Handler functions
  const addSelectedRehab = (rehab: Rehab) => {
    setSelectedRehabs((prev) =>
      prev.find((r) => r.id === rehab.id) ? prev : [...prev, rehab]
    );
  };
  const removeSelectedRehab = (rehabId: number) => {
    setSelectedRehabs((prev) => prev.filter((r) => r.id !== rehabId));
  };
  const clearSelectedRehabs = () => setSelectedRehabs([]);

  return (
    <AdmissionsProcessContext.Provider
      value={{
        selectedRehabs,
        setSelectedRehabs,
        selectedInsurancePayer,
        setSelectedInsurancePayer,
        preAssessment,
        setPreAssessment,
        substanceAbuseDescription,
        setSubstanceAbuseDescription,
        chosenFilters,
        setChosenFilters,
        userLocation,
        setUserLocation,
        generalUserInfo,
        setGeneralUserInfo,
        addSelectedRehab,
        removeSelectedRehab,
        clearSelectedRehabs,
      }}
    >
      {children}
    </AdmissionsProcessContext.Provider>
  );
}

export function useAdmissionsProcess() {
  const ctx = useContext(AdmissionsProcessContext);
  if (!ctx)
    throw new Error(
      "useAdmissionsProcess must be used within AdmissionsProcessProvider"
    );
  return ctx;
}
