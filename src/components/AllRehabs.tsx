"use client";

import { usePrototypeRehabs } from "@/hooks/apolloHooks/rehabHooks";

export function AllRehabs() {
  const { loading, error, data } = usePrototypeRehabs();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Rehabs</h1>
      <div className="space-y-4">
        {data?.prototypeRehabs.map((rehab) => (
          <div key={rehab.id} className="p-4 border rounded">
            <h2 className="text-xl">{rehab.name1}</h2>
            <p>ID: {rehab.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
