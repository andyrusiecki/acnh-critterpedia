import { Bug, Rarity, BugLocation } from '../interfaces';

export const BugLocationDisplay: Map<BugLocation, string> = new Map([
  [ BugLocation.Beach, 'Beach' ],
  [ BugLocation.BeachRocks, 'Beach Rocks' ],
  [ BugLocation.Flowers, 'Flowers' ],
  [ BugLocation.Flying, 'Flying' ],
  [ BugLocation.Ground, 'Ground' ],
  [ BugLocation.NearBuildings, 'Near Buildings' ],
  [ BugLocation.PalmTrees, 'Palm Trees' ],
  [ BugLocation.Rocks, 'Rocks' ],
  [ BugLocation.RottenTurnips, 'Rotten Turnips' ],
  [ BugLocation.Snowball, 'Snowball' ],
  [ BugLocation.Trash, 'Trash' ],
  [ BugLocation.Trees, 'Trees' ],
  [ BugLocation.TreeStumps, 'Tree Stumps' ],
  [ BugLocation.Underground, 'Underground' ],
  [ BugLocation.UnderRocks, 'Under Rocks' ],
  [ BugLocation.UnderTrees, 'Under Trees' ],
  [ BugLocation.Villagers, 'Villagers' ],
  [ BugLocation.WaterSurface, 'Water Surface' ],
]);

export const AllBugs: Bug[] = [

];
