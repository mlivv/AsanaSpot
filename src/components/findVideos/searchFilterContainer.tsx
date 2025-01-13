import { LoaderCircle } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { GetVideos } from "../api/getVideos/videoClient";
import { durationType } from "../models/duration";
import { levelType } from "../models/level";
import { SelectionFilter } from "../models/selection";
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
  const [selections, setSelections] = useState<SelectionFilter>({
    duration: null,
    level: null,
    channel: null,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleSelection = (
    section: Sections,
    value: durationType | levelType | string | null
  ) => {
    setSelections((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  const isSelectionValidated = (obj: SelectionFilter) => {
    if (Object.values(obj).some((value) => value === null)) {
      return false;
    } else {
      return true;
    }
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await GetVideos(selections);
      setResults(data);
      setLoading(false);
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
      <div className="p-6 w-full lg:max-w-fit">
        <Button
          type="button"
          variant={"secondary"}
          className="self-center w-full"
          disabled={!isSelectionValidated(selections) || loading}
          onClick={() => loadData()}
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "Search"}
        </Button>
      </div>
    </div>
  );
}
