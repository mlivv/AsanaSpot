import VideosSections from "@/components/findVideos/videosSections";

export default function FindVideos() {
  return (
    <div className="bg-lightBeige min-h-screen flex flex-col items-center justify-center">
      <h1 className="self-center text-3xl lg:text-6xl font-bold text-center mt-24 lg:mt-0">
        Find what's best for you today
      </h1>
      <VideosSections />
    </div>
  );
}
