"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AppNavbar } from "@/components/AppNavbar";
import RehabSearchMain from "@/components/RehabSearch";
import InsuranceProviderSearch from "@/components/InsuranceProviderSearch";
import { Separator } from "@/components/ui/separator";
import AdmissionsPopupCard from "@/components/AdmissionsPopupCard";
import { cn } from "@/lib/utils";

export default function Home() {
  const [showAdmissionsCard, setShowAdmissionsCard] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hasSeenPopup = sessionStorage.getItem("hasSeenAdmissionsPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowAdmissionsCard(true);
        sessionStorage.setItem("hasSeenAdmissionsPopup", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleClosePopup = () => {
    setShowAdmissionsCard(false);
  };

  return (
    <div className={cn("min-h-screen flex flex-col relative")}>
      <AppNavbar />
      <Separator className="my-4" />
      <InsuranceProviderSearch />

      <main
        className={cn("flex-1 transition-colors duration-300", {
          "pointer-events-none select-none blur-sm": showAdmissionsCard,
        })}
      >
        <RehabSearchMain />
      </main>

      {showAdmissionsCard && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          onClick={handleClosePopup} // allows clicking on backdrop to close
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevents clicks within card from bubbling to backdrop
            className="w-full max-w-md"
          >
            <AdmissionsPopupCard onClose={handleClosePopup} />
          </div>
        </div>
      )}
    </div>
  );
}
