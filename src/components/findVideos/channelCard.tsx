import { Channel } from "../models/channel";
import SparkleLevelIndicator from "./sparkleLevelIndicator";

interface ChannelCardProps {
  channel: Channel;
  handleSelection: (section: Sections, value: string) => void;
  selectedId: string | null;
  disabled: boolean;
}

export default function ChannelCard({
  channel,
  handleSelection,
  selectedId,
  disabled,
}: ChannelCardProps) {
  const containerStyle = `rounded-md bg-lightBeige transition-all mb-4 border-2 border-buttonRing ${
    !disabled ? "hover:scale-105" : "cursor-not-allowed"
  }`;
  const selectedStyle =
    "border-2 border-lightGreen font-semibold bg-lightGreen/30";

  return (
    <div
      className={`${containerStyle} ${
        selectedId === channel.id && selectedStyle
      }`}
      onClick={() => {
        if (!disabled) {
          handleSelection("channel", channel.id);
        }
      }}
    >
      <div className="w-full h-[150px] relative overflow-hidden rounded-sm">
        <img
          src={channel.img.src}
          alt={channel.name}
          className={`w-full h-full object-cover ${disabled && "grayscale"}`}
        />
      </div>
      <div className="flex justify-between items-center p-2">
        <p className={`text-center ${disabled && "text-gray-700"}`}>
          {channel.name}
        </p>
        <div className="flex gap-2">
          <SparkleLevelIndicator level={channel.level} />
        </div>
      </div>
    </div>
  );
}
