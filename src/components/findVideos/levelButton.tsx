import { Sparkle } from "lucide-react";
import { Button } from "../ui/button";
import { levelType } from "../models/level";
import { Dispatch, SetStateAction } from "react";
import SparkleLevel from "./sparkleLevel";

interface LevelButtonProps {
  handleSelection: (section: Sections, value: levelType | null) => void;
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
  const containerStyle =
    "p-6 border-2 w-full border-buttonRing flex items-center hover:bg-buttonRing/20 hover:shadow hover:scale-105 transition-all ";
  const selectedStyle =
    "bg-lightGreen/30 border-lightGreen hover:bg-lightGreen/40 hover:text-black";

  return (
    <Button
      variant={"ghost"}
      className={`${containerStyle} group ${
        selected === value && selectedStyle
      }`}
      onClick={() => {
        handleSelection("level", value);
        handleSelection("channel", null);
        setSelected(value);
      }}
    >
      <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
      <SparkleLevel level={value} />
    </Button>
  );
}
