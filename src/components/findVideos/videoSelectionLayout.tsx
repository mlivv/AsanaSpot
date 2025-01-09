import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface VideoSelectionLayoutProps {
  title: string;
  children: ReactNode;
  className?: string;
  activeSection: boolean;
}

export default function VideoSelectionLayout({
  title,
  children,
  className,
  activeSection: active
}: VideoSelectionLayoutProps) {
  return (
    <div
      className={cn(
        "col-span-3 lg:col-span-1 flex flex-col gap-2 min-h-[calc(100vh-50vh)]",
        className
      )}
    >
      <div className={`border-[1px] border-black p-6 flex flex-col gap-6 h-full justify-center ${active ? "bg-darkGreen" : "bg-darkGreen/10"}`}>
        <p className={`text-center text-2xl font-bold ${active ? "text-white" : "text-black"}`}>{title}</p>
        {children}
      </div>
      <p className="px-6 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
        hendrerit felis. Duis a sodales diam. Nunc pellentesque lorem erat
      </p>
    </div>
  );
}
