import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { YogaBenefit } from "../data/yogaBenefits";

interface YogaBenefitButtonProps {
  b: YogaBenefit;
  className?: string;
  setActive: Dispatch<SetStateAction<boolean>>;
  setActiveButtonId: Dispatch<SetStateAction<number>>;
  active: boolean;
}

export default function YogaBenefitButton({
  className,
  setActive,
  setActiveButtonId,
  active,
  b,
}: YogaBenefitButtonProps) {
  const { icon: Icon, title, id } = b;

  return (
    <div
      className={cn(
        `${
          active
            ? "bg-lightBeige hover:bg-lightBeige/90 border-lightBeige"
            : "hover:bg-mediumGreen/80 bg-mediumGreen border-mediumGreen"
        } 
        border-2 flex flex-col justify-center items-center gap-2 p-3 lg:p-6 rounded-xl cursor-pointer shadow-md`,
        className
      )}
      onClick={() => {
        setActive(true);
        setActiveButtonId(id);
      }}
    >
      <div className="w-full flex justify-center items-center">
        <Icon className="text-lightGreen size-8 lg:size-14" />
      </div>
      <div className="min-h-[50%] flex flex-col items-center">
        <p
          className={`${
            active ? "text-black" : "text-white"
          } text-sm lg:text-xl text-center`}
        >
          {title}
        </p>
        <ChevronDown className={`${active ? "text-black" : "text-white"}`} />
      </div>
    </div>
  );
}
