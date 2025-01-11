import { Sparkle } from "lucide-react";
import { Button } from "../ui/button";
import { levelType } from "../models/level";
import { Dispatch, SetStateAction } from "react";

interface LevelButtonProps {
  handleSelection: (section: Sections, value: string) => void;
  value: levelType;
  selected: levelType | undefined;
  setSelected: Dispatch<SetStateAction<levelType | undefined>>;
}

export default function LevelButton({
  handleSelection,
  value,
  selected,
  setSelected,
}: LevelButtonProps) {
  const containerStyle = "border border-white p-6 text-white ";
  const selectedStyle =
    "bg-lightGreen/10 border-lightGreen hover:bg-lightGreen/40 hover:text-white";

  return (
    <Button
      variant={"ghost"}
      className={`${containerStyle} group ${
        selected === value && selectedStyle
      }`}
      onClick={() => {
        handleSelection("Level", value), setSelected(value);
      }}
    >
      <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
      <Sparkle className={`fill-white group-hover:fill-black`} />
      <Sparkle
        className={`${
          (value === "intermediate" || value === "advanced") &&
          "fill-white group-hover:fill-black"
        }`}
      />
      <Sparkle
        className={`${
          value === "advanced" && "fill-white group-hover:fill-black"
        }`}
      />
    </Button>
  );
}
