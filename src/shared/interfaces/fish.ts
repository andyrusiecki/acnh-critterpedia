import { Critter } from "./critter";

export interface Fish extends Critter {
  location: FishLocation;
  shadow: FishShadow;
  mustBeRaining: boolean;
}

export enum FishLocation {
  CliffTop = 'cliff-top',
  Pier = 'pier',
  Pond = 'pond',
  River = 'river',
  RiverMouth = 'river-mouth',
  Sea = 'sea',
}

export enum FishShadow {
  VerySmall = 'very-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Huge = 'huge',
  LongAndThin = 'long-thin',
  Finned = 'finned',
}
