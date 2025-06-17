import React from "react";
import FilterTopBar from "./FilterTopBar";
import ResultsGrid from "./ResultsGrid";

const RehabSearch: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto w-full">
      <FilterTopBar />
      <ResultsGrid />
    </div>
  );
};

export default RehabSearch;
