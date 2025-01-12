import { Dispatch, SetStateAction } from "react";
import { Channel } from "../models/channel";

interface ChannelCardProps {
  channel: Channel;
  handleSelection: (section: Sections, value: string) => void;
  selectedId: string | undefined;
  setSelectedId: Dispatch<SetStateAction<string | undefined>>;
}

export default function ChannelCard({
  channel,
  handleSelection,
  selectedId,
  setSelectedId,
}: ChannelCardProps) {
  const selectedStyle =
    "border-2 border-lightGreen font-semibold bg-lightGreen/30";

  return (
    <div
      className={`rounded-md bg-lightBeige mb-4 transition-all border-2 border-buttonRing hover:scale-105 ${
        selectedId === channel.id && selectedStyle
      }`}
      onClick={() => {
        handleSelection("Channel", channel.id);
        setSelectedId(channel.id);
      }}
    >
      <div className="w-full h-[150px] relative overflow-hidden rounded-sm">
        <img
          src={channel.img.src}
          alt={channel.name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center p-2">{channel.name}</p>
    </div>
  );
}
