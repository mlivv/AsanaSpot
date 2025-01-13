import { Dispatch, SetStateAction, useState } from "react";
import { GetVideos } from "../api/getVideos/videoServiceClient";
import { durationType } from "../models/duration";
import { levelType } from "../models/level";
import { SelectionsType } from "../models/selection";
import { VideoPreview } from "../models/videoPreview";
import { Button } from "../ui/button";
import FiltersContainer from "./filtersContainer";

interface SearchFilterContainerProps {
  setResults: Dispatch<SetStateAction<VideoPreview[]>>;
  setWarning: Dispatch<SetStateAction<boolean>>;
  setWarningMessage: Dispatch<SetStateAction<string>>;
}

export default function SearchFilterContainer({
  setResults,
  setWarning,
  setWarningMessage,
}: SearchFilterContainerProps) {
  const [selections, setSelections] = useState<SelectionsType>({
    duration: null,
    level: null,
    channel: null,
  });

  const handleSelection = (
    section: Sections,
    value: durationType | levelType | string | null
  ) => {
    setSelections((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  const isSelectionValidated = (obj: SelectionsType) => {
    if (Object.values(obj).some((value) => value === null)) {
      return false;
    } else {
      return true;
    }
  };

  const loadData = async () => {
    event?.preventDefault();
    try {
      const data = await GetVideos(selections);
      setResults(data);
    } catch (e) {
      const message = (e as Error).message;
      setWarning(true);
      setWarningMessage(message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-40vh)]">
      <FiltersContainer
        handleSelection={handleSelection}
        selections={selections}
      />
      <Button
        className="self-center"
        disabled={!isSelectionValidated(selections)}
        onClick={() => loadData()}
      >
        Search
      </Button>
    </div>
  );
}
