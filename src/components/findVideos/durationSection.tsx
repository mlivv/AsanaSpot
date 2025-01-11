import { useState } from "react";
import { durationType } from "../models/duration";
import DurationButton from "./durationButton";
import VideoSelectionLayout from "./videoSelectionLayout";

interface DurationSectionProps {
  handleSelection: (section: Sections, value: string) => void;
}

export default function DurationSection({
  handleSelection,
}: DurationSectionProps) {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non hendrerit felis. Duis a sodales diam. Nunc pellentesque lorem erat";
  const [selected, setSelected] = useState<durationType>();

  return (
    <VideoSelectionLayout
      title="Duration"
      activeSection={true}
      description={description}
    >
      <div className="flex flex-col gap-4 mx-auto">
        <DurationButton
          selected={selected}
          handleSelection={handleSelection}
          setSelected={setSelected}
          value="medium"
        />
        <DurationButton
          selected={selected}
          handleSelection={handleSelection}
          setSelected={setSelected}
          value="long"
        />
      </div>
    </VideoSelectionLayout>
  );
}
