"use client";

import { AppNavbar } from "@/components/AppNavbar";
import { RehabSearch } from "@/components/RehabSearch";
import { AllRehabs } from "@/components/AllRehabs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <AppNavbar isSidebarOpen={isSidebarOpen} />
        <Separator className="my-4" />
        <main className="flex-1">
          <RehabSearch
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <AllRehabs />
        </main>
      </div>
    </SidebarProvider>
  );
}
