import { durationType } from "./duration";
import { levelType } from "./level";

export interface SelectionFilter {
  duration: durationType | null;
  level: levelType | null;
  channel: string | null;
};