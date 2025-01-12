"use client";

import { useEffect, useState } from "react";
import DurationSection from "./durationSection";
import LevelSection from "./levelSection";
import ChannelSection from "./channelSection";
import { levelType } from "../models/level";
import { durationType } from "../models/duration";
import { Button } from "../ui/button";

type SelectionsType = {
  duration: durationType | null;
  level: levelType | null;
  channel: string | null;
};

export default function VideosSections() {
  const [selections, setSelections] = useState<SelectionsType>({
    duration: null,
    level: null,
    channel: null,
  });

  // Each channel has a defined difficulty level. Changing the difficulty
  // level resets the channel selection.
  const [difficultySelected, setDifficultySelected] =
    useState<levelType | null>(selections.level);

  useEffect(() => {
    setDifficultySelected(selections.level);
  }, [selections]);

  const handleSelection = (
    section: Sections,
    value: durationType | levelType | string | null
  ) => {
    setSelections((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  const isSelectionValidated = (obj: SelectionsType) => {
    return Object.values(obj).some((value) => value === null);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-6 py-6 px-4">
        <DurationSection handleSelection={handleSelection} />
        <LevelSection handleSelection={handleSelection} />
        <ChannelSection
          handleSelection={handleSelection}
          difficultySelected={difficultySelected}
          selectedChannel={selections.channel}
        />
      </div>
      <Button
        className="self-center"
        disabled={isSelectionValidated(selections)}
        onClick={() => console.log("click")}
      >
        Search
      </Button>
    </div>
  );
}
