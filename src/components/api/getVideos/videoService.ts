import { SelectionFilter } from "@/components/models/selection";
import { VideoPreview } from "@/components/models/videoPreview";
import { mapVideoPreviewDtoToVideoPreview } from "./videosMapping";
import { fetchVideos } from "./videoQuery";

export async function GetVideos(
  selection: SelectionFilter
): Promise<VideoPreview[]> {
  const data = await fetchVideos(selection);
  const mappedVideos: VideoPreview[] = mapVideoPreviewDtoToVideoPreview(
    data.items
  );
  return mappedVideos;
}
