import { usePVerifyContext } from "./pverifyContext";

export function usePVerifyEligibility() {
  const {
    submitEligibility,
    pollEligibilityResult,
    loading,
    error,
    result,
    reset,
  } = usePVerifyContext();
  return {
    submitEligibility,
    pollEligibilityResult,
    loading,
    error,
    result,
    reset,
  };
}

export function usePVerifyToken() {
  const { getToken, loading, error } = usePVerifyContext();
  return { getToken, loading, error };
}

export function usePVerifyResult() {
  const { result, loading, error } = usePVerifyContext();
  return { result, loading, error };
}
