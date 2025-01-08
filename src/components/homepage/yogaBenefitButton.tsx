import { ChevronDown, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface YogaBenefitButtonProps {
  title: string;
  icon: LucideIcon;
  className?: string;
  setActive: Dispatch<SetStateAction<boolean>>;
  setActiveButtonId: Dispatch<SetStateAction<number>>;
  active: boolean;
  id: number;
}

export default function YogaBenefitButton({
  title,
  icon,
  className,
  setActive,
  setActiveButtonId,
  active,
  id,
}: YogaBenefitButtonProps) {
  const Icon = icon;

  return (
    <Button
      variant={"outline"}
      className={cn(
        `${
          active
            ? "bg-lightBeige border-lightBeige hover:bg-lightBeige/70"
            : "hover:bg-lightBeige/10"
        } border-2 flex flex-col gap-2 text-wrap min-h-[50vw] lg:min-h-[15vw]`,
        className
      )}
      onClick={() => {
        setActive(true);
        setActiveButtonId(id);
      }}
    >
      <Icon
        className={`${active ? "text-lightGreen" : "text-white"}`}
        style={{ width: "40px", height: "40px" }}
      />
      <h3
        className={`${
          active ? "text-black" : "text-white"
        } text-sm lg:text-xl font-bold`}
      >
        {title}
      </h3>
      <ChevronDown className={`${active ? "text-black" : "text-white"}`} />
    </Button>
  );
}
