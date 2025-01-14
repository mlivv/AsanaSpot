import { useState } from "react";
import { durationType } from "../models/duration";
import DurationButton from "./durationButton";
import VideoSelectionLayout from "./videoSelectionLayout";

interface DurationSectionProps {
  handleSelection: (section: Sections, value: durationType) => void;
  className?: string;
}

export default function DurationSection({
  handleSelection,
  className,
}: DurationSectionProps) {
  const description = "Specify your preferred workout duration.";
  const [selected, setSelected] = useState<durationType>();

  return (
    <VideoSelectionLayout
      title="Duration"
      description={description}
      className={className}
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
