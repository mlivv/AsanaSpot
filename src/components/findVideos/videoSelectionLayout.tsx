import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface VideoSelectionLayoutProps {
  title: string;
  children: ReactNode;
  className?: string;
  description?: string;
}

export default function VideoSelectionLayout({
  title,
  children,
  className,
  description,
}: VideoSelectionLayoutProps) {
  return (
    <div
      className={cn(
        "min-w-fit p-6 max-h-[500px] scrollbar bg-lightBeige rounded-lg overflow-y-auto shadow-md max-w-screen-sm",
        className
      )}
    >
      <p className={`text-center text-2xl font-extrabold`}>{title}</p>
      <p className="text-center mb-4">{description}</p>
      <div className="max-h-[300px]">{children}</div>
    </div>
  );
}
