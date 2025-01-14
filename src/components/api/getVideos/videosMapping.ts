import { VideoPreviewDto } from "@/components/models/dto/videoPreviewDto";
import { VideoPreview } from "@/components/models/videoPreview";

export function VideoPreviewDtoToVideoPreview(
  videoPreviewDto: VideoPreviewDto
): VideoPreview {
  return {
    id: videoPreviewDto.id.videoId,
    title: videoPreviewDto.snippet.title,
    publishingDate: new Date(videoPreviewDto.snippet.publishedAt)
      .toISOString()
      .split("T")[0],
    imgUrl: videoPreviewDto.snippet.thumbnails.medium.url,
  };
}

export function mapVideoPreviewDtoToVideoPreview(
  videoPreviewDto: VideoPreviewDto[]
) {
  const data = videoPreviewDto.map((videoP) =>
    VideoPreviewDtoToVideoPreview(videoP)
  );
  return data;
}
