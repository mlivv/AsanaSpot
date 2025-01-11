import { Dispatch, SetStateAction } from "react";
import { durationType } from "../models/duration";
import { Button } from "../ui/button";

interface DurationButtonProps {
  selected: durationType | undefined;
  handleSelection: (section: Sections, value: string) => void;
  setSelected: Dispatch<SetStateAction<durationType | undefined>>;
  value: durationType;
}

export default function DurationButton({
  selected,
  handleSelection,
  setSelected,
  value,
}: DurationButtonProps) {
  const buttonStyle = "p-6 text-white border-2";
  const selectedStyle =
    "bg-lightGreen/10 border-lightGreen hover:bg-lightGreen/40 hover:text-white";
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
        handleSelection("Duration", value);
        setSelected(value);
      }}
    >
      {durationText}
    </Button>
  );
}
