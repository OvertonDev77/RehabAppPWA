import { useEffect, useState } from "react";

interface LocationState {
  state: string | null;
  loading: boolean;
  error: string | null;
}

export function useUserStateLocation(): LocationState {
  const [state, setState] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Use Nominatim reverse geocoding
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=5&addressdetails=1`
          );
          const data = await response.json();
          const userState = data?.address?.state || null;
          setState(userState);
        } catch {
          setError("Failed to reverse geocode location.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  }, []);

  return { state, loading, error };
}
