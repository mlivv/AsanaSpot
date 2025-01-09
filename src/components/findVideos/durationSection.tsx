import { Button } from "../ui/button";
import VideoSelectionLayout from "./videoSelectionLayout";

interface DurationSectionProps {
  handleSelection: (section: Sections, value: string) => void;
}

export default function DurationSection({
  handleSelection,
}: DurationSectionProps) {
  const buttonStyle = "p-6 text-white";

  return (
    <VideoSelectionLayout title="Duration" activeSection={true}>
      <div className="flex flex-col gap-4 mx-auto">
        <Button
          variant={"outline"}
          className={`${buttonStyle}`}
          onClick={() => handleSelection("Duration", "")}
        >
          0 - 20 minutes
        </Button>
        <Button
          variant={"outline"}
          className={buttonStyle}
          onClick={() => handleSelection("Duration", "")}
        >
          20 - 40 minutes
        </Button>
        <Button
          variant={"outline"}
          className={buttonStyle}
          onClick={() => handleSelection("Duration", "")}
        >
          40 - 60 minutes
        </Button>
        <Button
          variant={"outline"}
          className={buttonStyle}
          onClick={() => handleSelection("Duration", "")}
        >
          60+ minutes
        </Button>
      </div>
    </VideoSelectionLayout>
  );
}
