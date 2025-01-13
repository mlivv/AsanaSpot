import { VideoPreview } from "../models/videoPreview";

interface ResultsContainerProps {
  results: VideoPreview[];
  warning: boolean;
}

export default function ResultsContainer({
  results,
  warning,
}: ResultsContainerProps) {
  return <div>{}</div>;
}
