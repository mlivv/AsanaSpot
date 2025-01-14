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
          <a
            key={v.id}
            className="col-span-3 lg:col-span-1 hover:scale-105 transition-all rounded-lg"
            href={`https://www.youtube.com/watch?v=${v.id}`}
          >
            <img
              src={v.imgUrl}
              alt={v.title}
              className="object-contain w-full rounded-lg"
            />
            <div className="py-2 ">
              <p className="text-white font-semibold hover:underline hover:cursor-pointer">
                {v.title}
              </p>
              {/* <p className="font-extralight text-white">{v.description}</p> */}
              <p className="font-extralight text-white">{v.publishingDate}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
