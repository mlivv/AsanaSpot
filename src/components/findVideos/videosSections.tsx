"use client";

import { useEffect, useState } from "react";
import DurationSection from "./durationSection";
import LevelSection from "./levelSection";
import ChannelSection from "./channelSection";

export default function VideosSections() {
  const [selections, setSelections] = useState({
    durationSection: null,
    levelSection: null,
    typeSection: null,
  });

  useEffect(() => {
    console.log(selections);
  });

  const handleSelection = (section: Sections, value: string) => {
    setSelections((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center max-w-screen-lg gap-8 py-6 px-4">
      <DurationSection
        handleSelection={handleSelection}
      />
      <LevelSection
        handleSelection={handleSelection}
      />
      <ChannelSection
        handleSelection={handleSelection}
      />
    </div>
  );
}
