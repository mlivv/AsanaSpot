import { SelectionsType } from "@/components/models/selection";
import { VideoPreview } from "@/components/models/videoPreview";
import { fetchVideos } from "./videos-api";
import { mapVideoPreviewDtoToVideoPreview } from "./videosMapping";

export async function GetVideos(
  selection: SelectionsType
): Promise<VideoPreview[]> {
  const data = await fetchVideos(selection);
  const mappedVideos: VideoPreview[] = mapVideoPreviewDtoToVideoPreview(
    data.items
  );
  return mappedVideos;
}
