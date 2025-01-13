import { durationType } from "./duration";
import { levelType } from "./level";

export type SelectionsType = {
  duration: durationType | null;
  level: levelType | null;
  channel: string | null;
};