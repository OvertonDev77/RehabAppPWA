"use client";
import RehabSearch from "@/components/RehabSearch";
import { RehabSearchProvider } from "@/components/RehabSearch/context/RehabSearchContext";

export default function Home() {
  return (
    <RehabSearchProvider>
      <RehabSearch />
    </RehabSearchProvider>
  );
}
