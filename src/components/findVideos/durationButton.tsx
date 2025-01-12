import { Dispatch, SetStateAction } from "react";
import { durationType } from "../models/duration";
import { Button } from "../ui/button";

interface DurationButtonProps {
  selected: durationType | undefined;
  handleSelection: (section: Sections, value: durationType) => void;
  setSelected: Dispatch<SetStateAction<durationType | undefined>>;
  value: durationType;
}

export default function DurationButton({
  selected,
  handleSelection,
  setSelected,
  value,
}: DurationButtonProps) {
  const buttonStyle =
    "p-6 border-2 border-buttonRing hover:bg-buttonRing/20 hover:shadow hover:scale-105 transition-all";
  const selectedStyle =
    "bg-lightGreen/30 border-lightGreen hover:bg-lightGreen/40";
  let durationText = "";

  switch (value) {
    case "medium":
      durationText = "5 - 20 minutes";
      break;
    case "long":
      durationText = "+ 20 minutes";
  }

  return (
    <Button
      variant={"outline"}
      className={`${buttonStyle} ${selected === value && selectedStyle}`}
      value={value}
      onClick={() => {
        handleSelection("duration", value);
        setSelected(value);
      }}
    >
      {durationText}
    </Button>
  );
}
