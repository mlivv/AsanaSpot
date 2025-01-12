import { StaticImageData } from "next/image";
import { levelType } from "./level";

export interface Channel {
  id: string;
  name: string;
  level: levelType;
  img: StaticImageData;
}
