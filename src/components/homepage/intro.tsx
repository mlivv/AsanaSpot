"use client";

import { redirect } from "next/navigation";
import { scrolltoHash } from "../animations/scrollToHash";
import { Button } from "../ui/button";
import BackgroundImage from "./backgroundImage";

export default function Intro() {
  return (
    <div
      className="relative h-screen flex items-center justify-center"
      id="intro"
    >
      <BackgroundImage className="absolute top-0 left-0 -z-20" />
      <div className="flex flex-col gap-4 text-center max-w-[70vw] lg:max-w-[30vw]">
        <h1 className="text-white self-center text-3xl lg:text-6xl font-bold">
          Find what's best for you today
        </h1>
        <p className="text-white">
          Explore yoga videos tailored to your needs. Select your preferences,
          and let us help you find the perfect session to suit your mood and
          goals.
        </p>
        <div className="flex gap-6 self-center">
          <Button
            variant={"outline"}
            className="text-white"
            onClick={() => scrolltoHash("whatIsYoga", "center")}
          >
            Discover more
          </Button>

          <Button variant={"secondary"} onClick={() => redirect("/findVideos")}>
            Find videos
          </Button>
        </div>
      </div>
    </div>
  );
}
