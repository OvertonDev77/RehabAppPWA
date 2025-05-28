import React from "react";

const RehabCard: React.FC<{ rehab: any }> = ({ rehab }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <h2 className="text-lg font-bold mb-2">{rehab.name}</h2>
      <div className="text-sm text-gray-600 mb-1">{rehab.address}</div>
      <div className="text-sm text-gray-800 mb-2">{rehab.description}</div>
      <div className="flex flex-wrap gap-2 text-xs">
        {rehab.amenities?.length > 0 && (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Amenities: {rehab.amenities.map((a: any) => a.name).join(", ")}
          </span>
        )}
        {rehab.approaches?.length > 0 && (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
            Approaches: {rehab.approaches.map((a: any) => a.name).join(", ")}
          </span>
        )}
        {rehab.treatments?.length > 0 && (
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
            Treatments: {rehab.treatments.map((t: any) => t.name).join(", ")}
          </span>
        )}
      </div>
    </div>
  );
};

export default RehabCard;
