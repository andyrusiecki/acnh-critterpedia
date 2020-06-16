import { Critter } from "./critter";

export interface Bug extends Critter {
  location: BugLocation;
}

export enum BugLocation {
  Beach = 'beach',
  BeachRocks = 'beach-rocks',
  Flowers = 'flowers',
  Flying = 'flying',
  Ground = 'ground',
  NearBuildings = 'near-buildings',
  PalmTrees = 'palm-trees',
  Rocks = 'rocks',
  RottenTurnips = 'rotten-turnips',
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

