import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface VideoSelectionLayoutProps {
  title: string;
  children: ReactNode;
  className?: string;
  activeSection: boolean;
  description?: string;
}

export default function VideoSelectionLayout({
  title,
  children,
  className,
  activeSection,
  description,
}: VideoSelectionLayoutProps) {
  return (
    <div
      className={cn(
        "col-span-3 lg:col-span-1 flex flex-col gap-2 max-h-fit max-w-screen-md relative px-6 lg:px-0",
        className
      )}
    >
      <div
        className={`border-[1px] border-darkGreen p-14 flex flex-col gap-6 h-full justify-center bg-darkGreen/90 rounded-lg shadow-md`}
      >
        <p
          className={`text-center text-2xl font-bold ${
            activeSection ? "text-white" : "text-black"
          }`}
        >
          {title}
        </p>
        {children}
      </div>
        <p className="px-6 text-center mt-4">{description}</p>
    </div>
  );
}
