"use client";

import { scrolltoHash } from "@/components/animations/scrollToHash";
import ResultsContainer from "@/components/findVideos/resultsContainer";
import SearchFilterContainer from "@/components/findVideos/searchFilterContainer";
import { VideoPreview } from "@/components/models/videoPreview";
import { useEffect, useState } from "react";

export default function FindVideosPage() {
  const [results, setResults] = useState<VideoPreview[]>([]);
  const [warning, setWarning] = useState<boolean>(false);
  const [warningMessage, setWarningMessage] = useState<string>("");

  useEffect(() => {
    if (results.length > 0) scrolltoHash("results", "nearest");
  }, [results]);

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
      <div id="results">
        {(results.length > 0 || warning) && (
          <ResultsContainer
            results={results}
            warning={warning}
            warningMessage={warningMessage}
          />
        )}
      </div>
    </div>
  );
}
