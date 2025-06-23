"use client";
import RehabSearch from "@/components/RehabSearch";
import { RehabSearchProvider } from "@/components/RehabSearch/context/RehabSearchContext";
import RehabAppNavbar from "@/components/RehabSearch/AppNavbar";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const params = useSearchParams();

  return (
    <RehabSearchProvider>
      <RehabAppNavbar />
      <RehabSearch useQueryParams={params} />
    </RehabSearchProvider>
  );
}
