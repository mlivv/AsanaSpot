import { Icon, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface YogaBenefitButtonProps {
  title: string;
  icon: LucideIcon;
}

export default function YogaBenefitButton({
  title,
  icon,
}: YogaBenefitButtonProps) {
  const Icon = icon;

  return (
    <Button variant={"outline"} className="bg-lightBeige-90">
      <Icon className="text-white" />
      <h3 className="text-white">{title}</h3>
    </Button>
  );
}
