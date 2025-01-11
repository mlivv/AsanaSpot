"use client";

import { useEffect, useState } from "react";
import DurationSection from "./durationSection";
import LevelSection from "./levelSection";
import TypeSection from "./typeSection";

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
    <div className="w-full grid grid-cols-3 max-w-screen-lg gap-6 mt-6">
      <DurationSection handleSelection={handleSelection} />
      <LevelSection handleSelection={handleSelection} />
      <TypeSection />
    </div>
  );
}
