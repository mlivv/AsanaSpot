"use client";

import ResultsContainer from "@/components/findVideos/resultsContainer";
import SearchFilterContainer from "@/components/findVideos/searchFilterContainer";
import { VideoPreview } from "@/components/models/videoPreview";
import { useState } from "react";

export default function FindVideosPage() {
  const [results, setResults] = useState<VideoPreview[]>([]);
  const [warning, setWarning] = useState<boolean>(false);
  const [warningMessage, setWarningMessage] = useState<string>("");

  return (
    <div className="bg-darkGreen min-h-screen pt-[15vh]">
      <div className="flex flex-col justify-center lg:gap-6 min-h-[calc(100vh-60vh)]">
        <h1 className="self-center text-3xl lg:text-6xl font-bold text-center text-white">
          Find what's best for you today
        </h1>
        <SearchFilterContainer
          setResults={setResults}
          setWarning={setWarning}
          setWarningMessage={setWarningMessage}
        />
      </div>
      {(results.length > 0 || warning) && (
        <ResultsContainer
          results={results}
          warning={warning}
          warningMessage={warningMessage}
        />
      )}
    </div>
  );
}

//bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mediumGreen to-darkGreen
