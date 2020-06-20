import { Critter } from "./critter";

export interface Bug extends Critter {
  location: BugLocation;
  canBeRaining: boolean;
  numBugsNeeded: number;
}

export enum BugLocation {
  Beach = 'beach',
  BeachRocks = 'beach-rocks',
  BuildingLights = 'building-lights',
  Flowers = 'flowers',
  Flying = 'flying',
  FlyingFlowers = 'flying-flowers',
  Ground = 'ground',
  PalmTrees = 'palm-trees',
  Rocks = 'rocks',
  RottenTurnips = 'rotten-turnips',
  ShakingTrees = 'shaking-trees',
  Snowball = 'snowball',
  Trash = 'trash',
  Trees = 'trees',
  TreeStumps = 'tree-stumps',
  Underground = 'underground',
  UnderRocks = 'under-rocks',
  UnderTrees = 'under-trees',
  Villagers = 'villagers',
  WaterSurface = 'water-surface',
}
