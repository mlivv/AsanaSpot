import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <div className={cn("z-50 top-0", className)}>
      <p className="text-white">Asana Spot</p>
    </div>
  );
}
