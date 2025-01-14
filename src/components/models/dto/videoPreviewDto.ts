export interface VideoPreviewDto {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
    publishedAt: Date;
  };
}
