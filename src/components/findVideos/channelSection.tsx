import { useState } from "react";
import { ChannelList } from "../data/channelList";
import VideoSelectionLayout from "./videoSelectionLayout";
import ChannelCard from "./channelCard";

interface TypeSectionProps {
  handleSelection: (section: Sections, value: string) => void;
}

export default function ChannelSection({ handleSelection }: TypeSectionProps) {
  const description = "Choose one of the available channel options.";
  const [selectedId, setSelectedId] = useState<string>();

  return (
    <VideoSelectionLayout title="Channels" description={description}>
      <div className="pb-4">
        {ChannelList.map((channel) => (
          <ChannelCard
            key={channel.id}
            channel={channel}
            handleSelection={handleSelection}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>
    </VideoSelectionLayout>
  );
}
