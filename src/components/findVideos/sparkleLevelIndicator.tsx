import { Sparkle } from "lucide-react";
import { levelType } from "../models/level";

interface SparkleLevelProps {
  level: levelType;
}

export default function SparkleLevelIndicator({ level }: SparkleLevelProps) {
  return (
    <>
      <Sparkle size={15} className={`fill-black`} />
      <Sparkle
        size={15}
        className={`${
          (level === "intermediate" || level === "advanced") && `fill-black`
        }`}
      />
      <Sparkle
        size={15}
        className={`${level === "advanced" && `fill-black`}`}
      />
    </>
  );
}
