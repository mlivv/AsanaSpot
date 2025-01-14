import { useEffect, useState } from "react";
import { ChannelList } from "../data/channelList";
import { levelType } from "../models/level";
import ChannelCard from "./channelCard";
import VideoSelectionLayout from "./videoSelectionLayout";

interface TypeSectionProps {
  handleSelection: (section: Sections, value: string) => void;
  difficultySelected: levelType | null;
  selectedChannel: string | null;
  className?: string;
}

export default function ChannelSection({
  handleSelection,
  difficultySelected,
  selectedChannel,
  className,
}: TypeSectionProps) {
  const description = "Choose one of the available channel options.";
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(
    null
  );

  useEffect(() => {
    setSelectedChannelId(selectedChannel);
  }, [selectedChannel]);

  return (
    <VideoSelectionLayout
      title="Channels"
      description={description}
      className={className}
    >
      <div className="pb-4">
        {ChannelList.map((channel) => (
          <ChannelCard
            key={channel.id}
            channel={channel}
            handleSelection={handleSelection}
            selectedId={selectedChannelId}
            disabled={
              difficultySelected ? channel.level !== difficultySelected : false
            }
          />
        ))}
      </div>
    </VideoSelectionLayout>
  );
}
