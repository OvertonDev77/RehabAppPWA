"use client";
import RehabSearch from "@/components/RehabSearch";
import { RehabSearchProvider } from "@/components/RehabSearch/context/RehabSearchContext";
import RehabAppNavbar from "@/components/RehabSearch/AppNavbar";

export default function Home() {
  return (
    <RehabSearchProvider>
      <RehabAppNavbar />
      <RehabSearch />
    </RehabSearchProvider>
  );
}
