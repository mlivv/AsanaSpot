"use client";

import { useEffect, useState } from "react";
import ResultsContainer from "./resultsContainer";
import SearchFilterContainer from "./searchFilterContainer";
import { VideoPreview } from "../models/videoPreview";

export default function FilterAndResultsContainer() {
  const [results, setResults] = useState<VideoPreview[]>([]);
  const [warning, setWarning] = useState<boolean>(false);
  const [warningMessage, setWarningMessage] = useState<string>("");

  return (
    <div>
      <SearchFilterContainer
        setResults={setResults}
        setWarning={setWarning}
        setWarningMessage={setWarningMessage}
      />
      <ResultsContainer results={results} warning={warning} />
    </div>
  );
}
