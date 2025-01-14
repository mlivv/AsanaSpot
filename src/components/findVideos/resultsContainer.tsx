import { VideoPreview } from "../models/videoPreview";
import VideoPreviewCard from "./videoPreviewCard";

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
  if (warning) {
    return (
      <div>
        <h2 className="self-center text-2xl lg:text-5xl font-bold text-center text-white">
          Oh, no!
        </h2>
        <p className="text-white text-center py-3">{warningMessage}</p>
      </div>
    );
  }

  return (
    <div className="px-6 max-w-screen-xl mx-auto flex flex-col justify-center lg:gap-6">
      <h2 className="self-center text-2xl lg:text-5xl font-bold text-center text-white">
        Results
      </h2>
      <div className="grid grid-cols-3 gap-8 py-3">
        {results.map((v) => (
          <VideoPreviewCard key={v.id} videoP={v} />
        ))}
      </div>
    </div>
  );
}
