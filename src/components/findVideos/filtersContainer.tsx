import { useEffect, useState } from "react";
import { durationType } from "../models/duration";
import { levelType } from "../models/level";
import { SelectionFilter } from "../models/selection";
import ChannelSection from "./channelSection";
import DurationSection from "./durationSection";
import LevelSection from "./levelSection";

interface FiltersContainerProps {
  selections: SelectionFilter;
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
    <div className="grid grid-cols-3 gap-6 py-6 px-4">
      <DurationSection
        handleSelection={handleSelection}
        className="col-span-3 lg:col-span-1"
      />
      <LevelSection
        handleSelection={handleSelection}
        className="col-span-3 lg:col-span-1"
      />
      <ChannelSection
        handleSelection={handleSelection}
        difficultySelected={difficultySelected}
        selectedChannel={selections.channel}
        className="col-span-3 lg:col-span-1"
      />
    </div>
  );
}
