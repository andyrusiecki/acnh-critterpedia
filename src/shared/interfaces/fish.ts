import { Critter } from "./critter";

export interface Fish extends Critter {
  location: FishLocation;
  shadow: FishShadow;
  mustBeRaining: boolean;
}

export enum FishLocation {
  CliffTop,
  Pier,
  Pond,
  River,
  RiverMouth,
  Sea,
}

export enum FishShadow {
  VerySmall,
  Small,
  Medium,
  Large,
  Huge,
  LongAndThin,
  Finned,
}
