import { useEffect, useState } from "react";
import { durationType } from "../models/duration";
import { levelType } from "../models/level";
import { SelectionsType } from "../models/selection";
import ChannelSection from "./channelSection";
import DurationSection from "./durationSection";
import LevelSection from "./levelSection";

interface FiltersContainerProps {
  selections: SelectionsType;
  handleSelection: (
    section: Sections,
    value: durationType | levelType | string | null
  ) => void;
}

export default function FiltersContainer({
  selections,
  handleSelection,
}: FiltersContainerProps) {
  // Each channel has a defined difficulty level. Changing the difficulty
  // level resets the channel selection.
  const [difficultySelected, setDifficultySelected] =
    useState<levelType | null>(selections.level);

  useEffect(() => {
    setDifficultySelected(selections.level);
  }, [selections]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 py-6 px-4">
      <DurationSection handleSelection={handleSelection} />
      <LevelSection handleSelection={handleSelection} />
      <ChannelSection
        handleSelection={handleSelection}
        difficultySelected={difficultySelected}
        selectedChannel={selections.channel}
      />
    </div>
  );
}
