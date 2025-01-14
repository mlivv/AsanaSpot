import { LoaderCircle } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { GetVideos } from "../api/getVideos/videoService";
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
      setWarning(true);
      setWarningMessage(
        "Sorry, it looks like there's an error. Please try again later"
      );
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <FiltersContainer
        handleSelection={handleSelection}
        selections={selections}
      />
      <div className="pb-6 px-6 w-full md:max-w-fit">
        <Button
          type="button"
          variant={"secondary"}
          className="self-center text-white font-bold w-full bg-mediumGreen hover:bg-mediumGreen/80"
          disabled={!isSelectionValidated(selections) || loading}
          onClick={() => loadData()}
        >
          {loading ? <LoaderCircle className="animate-spin" /> : "Search"}
        </Button>
      </div>
    </div>
  );
}
