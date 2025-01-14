import { VideoPreview } from "../models/videoPreview";

interface VideoPreviewCardProps {
  videoP: VideoPreview;
}

export default function VideoPreviewCard({ videoP }: VideoPreviewCardProps) {
  return (
    <a
      target="_blank"
      className="col-span-3 lg:col-span-1 hover:scale-105 transition-all rounded-lg"
      href={`https://www.youtube.com/watch?v=${videoP.id}`}
    >
      <img
        src={videoP.imgUrl}
        alt={videoP.title}
        className="object-contain w-full rounded-lg"
      />
      <div className="py-2 ">
        <p className="text-white font-semibold hover:underline hover:cursor-pointer">
          {videoP.title}
        </p>
        <p className="font-extralight text-white">{videoP.publishingDate}</p>
      </div>
    </a>
  );
}
