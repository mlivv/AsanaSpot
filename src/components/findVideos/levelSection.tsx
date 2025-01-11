import { useState } from "react";
import { levelType } from "../models/level";
import LevelButton from "./levelButton";
import VideoSelectionLayout from "./videoSelectionLayout";

interface LevelSectionProps {
  handleSelection: (section: Sections, value: string) => void;
}

export default function LevelSection({ handleSelection }: LevelSectionProps) {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non hendrerit felis. Duis a sodales diam. Nunc pellentesque lorem erat";
  const [selected, setSelected] = useState<levelType>();

  return (
    <VideoSelectionLayout title="Level" activeSection={true} description={description}>
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
