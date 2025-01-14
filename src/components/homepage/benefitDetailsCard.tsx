import { SetStateAction } from "react";
import { YogaBenefit } from "../data/yogaBenefits";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface BenefitDetailsCardProps {
  selectedBenefit: YogaBenefit | undefined;
  setActive: (value: SetStateAction<boolean>) => void;
  setActiveId: (value: SetStateAction<number>) => void;
}

export default function BenefitDetailsCard({
  selectedBenefit,
  setActive,
  setActiveId,
}: BenefitDetailsCardProps) {
  return (
    <div className="bg-lightBeige mt-6 rounded-md p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-base lg:text-xl font-bold">
          {selectedBenefit?.title}
        </h2>
        <Button
          variant={"ghost"}
          className="hover:bg-darkGreen/10"
          onClick={() => {
            setActive(false);
            setActiveId(0);
          }}
        >
          <X />
        </Button>
      </div>
      <p>{selectedBenefit?.details}</p>
    </div>
  );
}
