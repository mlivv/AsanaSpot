"use client";

import { useState } from "react";
import DurationSection from "./durationSection";
import LevelSection from "./levelSection";
import TypeSection from "./typeSection";

export default function VideosSections() {
  const [selections, setSelections] = useState({
    durationSection: null,
    levelSection: null,
    typeSection: null,
  });

  const handleSelection = (section: Sections, value: string) => {
    setSelections((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  return (
    <div className="w-full grid grid-cols-3 gap-6 lg:gap-0 mt-6 lg:max-h-[calc(100vh-40vh)]">
      <DurationSection handleSelection={handleSelection}/>
      <LevelSection />
      <TypeSection />
    </div>
  );
}
