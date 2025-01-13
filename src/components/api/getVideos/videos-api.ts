"use server";

import { VideoPreviewDto } from "@/components/models/dto/videoPreviewDto";
import { SelectionsType } from "../../models/selection";

export async function fetchVideos(
  selection: SelectionsType
): Promise<{items: VideoPreviewDto[]}> {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    throw new Error("API_KEY not found in environment variables");
  }

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=yoga,${selection.level}&order=viewCount&relevanceLanguage=en&regionCode=US&maxResults=25&videoDuration=${selection.duration}&type=video&channelId=${selection.channel}&key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error(`Failed fetch ${response.statusText}`);
  }

  return response.json();
}
