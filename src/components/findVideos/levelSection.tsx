import { useState } from "react";
import { levelType } from "../models/level";
import LevelButton from "./levelButton";
import VideoSelectionLayout from "./videoSelectionLayout";

interface LevelSectionProps {
  handleSelection: (section: Sections, value: levelType | null) => void;
}

export default function LevelSection({ handleSelection }: LevelSectionProps) {
  const description = "Select the fitness level that best represents you.";
  const [selected, setSelected] = useState<levelType>();

  return (
    <VideoSelectionLayout title="Level" description={description}>
      <div className="flex flex-col gap-4 items-center">
        <LevelButton
          handleSelection={handleSelection}
          selected={selected}
          setSelected={setSelected}
          value="beginner"
        />
        <LevelButton
          handleSelection={handleSelection}
          selected={selected}
          setSelected={setSelected}
          value="intermediate"
        />
        <LevelButton
          handleSelection={handleSelection}
          selected={selected}
          setSelected={setSelected}
          value="advanced"
        />
      </div>
    </VideoSelectionLayout>
  );
}
