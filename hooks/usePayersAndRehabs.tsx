"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const PayerRehabContext = createContext(null);

// Provider Component
export function PayerRehabProvider({ children }) {
  const [payers, setPayers] = useState([]);
  const [rehabs, setRehabs] = useState([]);
  const [filteredRehabs, setFilteredRehabs] = useState([]);
  const [filter, setFilter] = useState({ state: "", zip: "" });

  // Fetch payers & rehabs on mount
  useEffect(() => {
    async function fetchData() {
      try {
        const [payerRes, rehabRes] = await Promise.all([
          fetch("/api/payers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }),
          fetch("/api/rehabs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ state: "", zip: "" }), // Initially fetch all
          }),
        ]);

        const payersData = await payerRes.json();
        const rehabsData = await rehabRes.json();

        setPayers(payersData);
        setRehabs(rehabsData);
        setFilteredRehabs(rehabsData); // Initial rehabs = all rehabs
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Fetch filtered rehabs when filter changes
  useEffect(() => {
    async function fetchFilteredRehabs() {
      try {
        const response = await fetch("/api/rehabs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(filter),
        });

        const data = await response.json();
        setFilteredRehabs(data);
      } catch (error) {
        console.error("Error fetching filtered rehabs:", error);
      }
    }

    fetchFilteredRehabs();
  }, [filter]);

  return (
    <PayerRehabContext.Provider
      value={{ payers, rehabs, filteredRehabs, setFilter }}
    >
      {children}
    </PayerRehabContext.Provider>
  );
}

// Custom hook to use the context
export function usePayerRehab() {
  return useContext(PayerRehabContext);
}
