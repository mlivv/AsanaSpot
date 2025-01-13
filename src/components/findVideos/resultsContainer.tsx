import { useEffect } from "react";
import { VideoPreview } from "../models/videoPreview";

interface ResultsContainerProps {
  results: VideoPreview[];
  warning: boolean;
  warningMessage: string;
}

export default function ResultsContainer({
  results,
  warning,
  warningMessage,
}: ResultsContainerProps) {
  useEffect(() => {
    console.log("results " + results.map((r) => r.title));
    console.log("warning " + warning);
    console.log("warning message " + warningMessage);
  });

  return <div>{}</div>;
}
