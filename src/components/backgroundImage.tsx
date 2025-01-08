import Image from "next/image";
import woman_doing_yoga from "@/assets/yoga-girl-sit.jpg";
import { cn } from "@/lib/utils";

interface BackgroundImageProps {
  className?: string;
}

export default function BackgroundImage({ className }: BackgroundImageProps) {
  return (
    <div
      className={cn(
        "h-full w-full flex justify-center items-center",
        className
      )}
    >
      <Image
        src={woman_doing_yoga}
        alt="Woman doing yoga sitting on a mat"
        className="object-cover h-full w-full brightness-75"
      />
    </div>
  );
}
