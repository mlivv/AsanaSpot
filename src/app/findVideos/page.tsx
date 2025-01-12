import VideosSections from "@/components/findVideos/videosSections";

export default function FindVideos() {
  return (
    <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mediumGreen to-darkGreen min-h-screen lg:flex flex-col items-center justify-center">
      <h1 className="self-center text-3xl lg:text-6xl font-bold text-center pt-24 lg:pt-0 text-white">
        Find what's best for you today
      </h1>
      <VideosSections />
    </div>
  );
}
