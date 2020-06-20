import { Bug, Rarity, BugLocation } from '../interfaces';

export const BugLocationDisplay: Map<BugLocation, string> = new Map([
  [ BugLocation.Beach, 'Beach' ],
  [ BugLocation.BeachRocks, 'Beach Rocks' ],
  [ BugLocation.BuildingLights, 'Near Building Lights' ],
  [ BugLocation.Flowers, 'Flowers' ],
  [ BugLocation.Flying, 'Flying' ],
  [ BugLocation.FlyingFlowers, 'Flying Near Flowers' ],
  [ BugLocation.Ground, 'Ground' ],
  [ BugLocation.PalmTrees, 'On Palm Trees' ],
  [ BugLocation.Rocks, 'On Rocks' ],
  [ BugLocation.RottenTurnips, 'Near Rotten Turnips' ],
  [ BugLocation.ShakingTrees, 'Shaking Trees' ],
  [ BugLocation.Snowball, 'Snowball' ],
  [ BugLocation.Trash, 'Near Trash' ],
  [ BugLocation.Trees, 'On Trees' ],
  [ BugLocation.TreeStumps, 'Tree Stumps' ],
  [ BugLocation.Underground, 'Underground' ],
  [ BugLocation.UnderRocks, 'Under Rocks' ],
  [ BugLocation.UnderTrees, 'Under Trees' ],
  [ BugLocation.Villagers, 'Villagers' ],
  [ BugLocation.WaterSurface, 'Water Surface' ],
]);

export const AllBugs: Bug[] = [
  {

    "id": 1,
    "name": "Common Butterfly",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flying,
    "sellPrice": 160,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [4, 18]
    ],
    "monthRanges": [
      [1, 6],
      [9, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 2,
    "name": "Yellow Butterfly",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flying,
    "sellPrice": 160,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [4, 18]
    ],
    "monthRanges": [
      [3, 6],
      [9, 10]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 3,
    "name": "Tiger Butterfly",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flying,
    "sellPrice": 240,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [4, 18]
    ],
    "monthRanges": [
      [3, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 4,
    "name": "Peacock Butterfly",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.FlyingFlowers,
    "sellPrice": 2500,
    "numBugsNeeded": 20,
    "canBeRaining": false,

    "hourRanges": [
      [4, 18]
    ],
    "monthRanges": [
      [3, 6]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 5,
    "name": "Common Bluebottle",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flying,
    "sellPrice": 300,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [4, 18]
    ],
    "monthRanges": [
      [4, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 6,
    "name": "Paper Kite Butterfly",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.FlyingFlowers,
    "sellPrice": 1000,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [8, 18]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 7,
    "name": "Great Purple Emperor",
    "rarity": Rarity.Common,
    "location": BugLocation.FlyingFlowers,
    "sellPrice": 3000,
    "numBugsNeeded": 50,
    "canBeRaining": false,

    "hourRanges": [
      [4, 18]
    ],
    "monthRanges": [
      [5, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 8,
    "name": "Monarch Butterfly",
    "rarity": Rarity.Common,
    "location": BugLocation.FlyingFlowers,
    "sellPrice": 140,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [4, 16]
    ],
    "monthRanges": [
      [9, 11]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 9,
    "name": "Emperor Butterfly",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.FlyingFlowers,
    "sellPrice": 4000,
    "numBugsNeeded": 20,
    "canBeRaining": false,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [1, 3],
      [6, 9],
      [12, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 10,
    "name": "Agrias Butterfly",
    "rarity": Rarity.Common,
    "location": BugLocation.FlyingFlowers,
    "sellPrice": 3000,
    "numBugsNeeded": 20,
    "canBeRaining": false,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [4, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 11,
    "name": "Rajah Brooke's Birdwing",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.FlyingFlowers,
    "sellPrice": 2500,
    "numBugsNeeded": 20,
    "canBeRaining": false,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [1, 2],
      [4, 9],
      [12, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 12,
    "name": "Queen Alexandra's Birdwing",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.FlyingFlowers,
    "sellPrice": 4000,
    "numBugsNeeded": 50,
    "canBeRaining": false,

    "hourRanges": [
      [8, 15]
    ],
    "monthRanges": [
      [5, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 13,
    "name": "Moth",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.BuildingLights,
    "sellPrice": 130,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [0, 3],
      [19, 23]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 14,
    "name": "Atlas Moth",
    "rarity": Rarity.Common,
    "location": BugLocation.Trees,
    "sellPrice": 3000,
    "numBugsNeeded": 20,
    "canBeRaining": true,

    "hourRanges": [
      [0, 3],
      [19, 23]
    ],
    "monthRanges": [
      [4, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 15,
    "name": "Madagascan Sunset Moth",
    "rarity": Rarity.Common,
    "location": BugLocation.FlyingFlowers,
    "sellPrice": 2500,
    "numBugsNeeded": 20,
    "canBeRaining": false,

    "hourRanges": [
      [8, 15]
    ],
    "monthRanges": [
      [4, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 16,
    "name": "Long Locust",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Ground,
    "sellPrice": 200,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [8, 18]
    ],
    "monthRanges": [
      [4, 11]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 17,
    "name": "Migratory Locust",
    "rarity": Rarity.Common,
    "location": BugLocation.Ground,
    "sellPrice": 600,
    "numBugsNeeded": 20,
    "canBeRaining": true,

    "hourRanges": [
      [8, 18]
    ],
    "monthRanges": [
      [8, 11]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 18,
    "name": "Rice Grasshopper",
    "rarity": Rarity.Common,
    "location": BugLocation.Ground,
    "sellPrice": 400,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [8, 18]
    ],
    "monthRanges": [
      [8, 11]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 19,
    "name": "Grasshopper",
    "rarity": Rarity.Common,
    "location": BugLocation.Ground,
    "sellPrice": 160,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [7, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 20,
    "name": "Cricket",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Ground,
    "sellPrice": 130,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [9, 11]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 21,
    "name": "Bell Cricket",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Ground,
    "sellPrice": 430,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [9, 10]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 22,
    "name": "Mantis",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flowers,
    "sellPrice": 430,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [3, 11]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 23,
    "name": "Orchid Mantis",
    "rarity": Rarity.Common,
    "location": BugLocation.Flowers,
    "sellPrice": 2400,
    "numBugsNeeded": 20,
    "canBeRaining": false,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [3, 11]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 24,
    "name": "Honeybee",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.FlyingFlowers,
    "sellPrice": 200,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [3, 7]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 25,
    "name": "Wasp",
    "rarity": Rarity.Unknown,
    "location": BugLocation.ShakingTrees,
    "sellPrice": 2500,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 26,
    "name": "Brown Cicada",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Trees,
    "sellPrice": 250,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 27,
    "name": "Robust Cicada",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Trees,
    "sellPrice": 300,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 28,
    "name": "Giant Cicada",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Trees,
    "sellPrice": 500,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 29,
    "name": "Walker Cicada",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Trees,
    "sellPrice": 400,
    "numBugsNeeded": 20,
    "canBeRaining": true,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [8, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 30,
    "name": "Evening Cicada",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Trees,
    "sellPrice": 550,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [4, 7],
      [16, 18]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 31,
    "name": "Cicada Shell",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.Trees,
    "sellPrice": 10,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 32,
    "name": "Red DragonFly",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flying,
    "sellPrice": 180,
    "numBugsNeeded": 50,
    "canBeRaining": false,

    "hourRanges": [
      [8, 18]
    ],
    "monthRanges": [
      [9, 10]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 33,
    "name": "Darner Dragonfly",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flying,
    "sellPrice": 230,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [4, 10]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 34,
    "name": "Banded Dragonfly",
    "rarity": Rarity.Common,
    "location": BugLocation.Flying,
    "sellPrice": 4500,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [5, 10]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 35,
    "name": "Damselfly",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flying,
    "sellPrice": 500,
    "numBugsNeeded": 50,
    "canBeRaining": false,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 2],
      [11, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 36,
    "name": "Firefly",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flying,
    "sellPrice": 300,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [0, 3],
      [19, 23]
    ],
    "monthRanges": [
      [6, 6]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 37,
    "name": "Mole Cricket",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.Underground,
    "sellPrice": 500,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 5],
      [11, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 38,
    "name": "Pondskater",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.WaterSurface,
    "sellPrice": 130,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [8, 18]
    ],
    "monthRanges": [
      [5, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 39,
    "name": "Diving Beetle",
    "rarity": Rarity.Common,
    "location": BugLocation.WaterSurface,
    "sellPrice": 800,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [8, 18]
    ],
    "monthRanges": [
      [5, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 40,
    "name": "Giant Water Bug",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.WaterSurface,
    "sellPrice": 2000,
    "numBugsNeeded": 50,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [19, 23]
    ],
    "monthRanges": [
      [4, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 41,
    "name": "Stinkbug",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flowers,
    "sellPrice": 120,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [3, 10]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 42,
    "name": "Man-faced Stink Bug",
    "rarity": Rarity.Common,
    "location": BugLocation.Flowers,
    "sellPrice": 1000,
    "numBugsNeeded": 20,
    "canBeRaining": false,

    "hourRanges": [
      [0, 7],
      [19, 23]
    ],
    "monthRanges": [
      [3, 10]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 43,
    "name": "Ladybug",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Flowers,
    "sellPrice": 200,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [8, 16]
    ],
    "monthRanges": [
      [3, 6],
      [10, 10]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 44,
    "name": "Tiger Beetle",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Ground,
    "sellPrice": 1500,
    "numBugsNeeded": 20,
    "canBeRaining": false,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [2, 10]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 45,
    "name": "Jewel Beetle",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.TreeStumps,
    "sellPrice": 2400,
    "numBugsNeeded": 20,
    "canBeRaining": false,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [4, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 46,
    "name": "Violin Beetle",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.TreeStumps,
    "sellPrice": 450,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [5, 6],
      [9, 11]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 47,
    "name": "Citrus Long-Horned Beetle",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.TreeStumps,
    "sellPrice": 350,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 48,
    "name": "Rosalia Batesi Beetle",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.TreeStumps,
    "sellPrice": 3000,
    "numBugsNeeded": 20,
    "canBeRaining": false,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [5, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 49,
    "name": "Blue Weevil Beetle",
    "rarity": Rarity.Common,
    "location": BugLocation.PalmTrees,
    "sellPrice": 800,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 50,
    "name": "Dung Beetle",
    "rarity": Rarity.Common,
    "location": BugLocation.Snowball,
    "sellPrice": 3000,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 2],
      [12, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 51,
    "name": "Earth-Boring Dung Beetle",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Ground,
    "sellPrice": 300,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [7, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 52,
    "name": "Scarab Beetle",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.Trees,
    "sellPrice": 10000,
    "numBugsNeeded": 50,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [23, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 53,
    "name": "Drone Beetle",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Trees,
    "sellPrice": 200,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [6, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 54,
    "name": "Goliath Beetle",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.PalmTrees,
    "sellPrice": 8000,
    "numBugsNeeded": 100,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [6, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 55,
    "name": "Saw Stag",
    "rarity": Rarity.Common,
    "location": BugLocation.Trees,
    "sellPrice": 2000,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 56,
    "name": "Miyama Stag",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Trees,
    "sellPrice": 1000,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 57,
    "name": "Giant Stag",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.Trees,
    "sellPrice": 10000,
    "numBugsNeeded": 50,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [23, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 58,
    "name": "Rainbow Stag",
    "rarity": Rarity.Common,
    "location": BugLocation.Trees,
    "sellPrice": 6000,
    "numBugsNeeded": 50,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [19, 23]
    ],
    "monthRanges": [
      [6, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 59,
    "name": "Cyclommatus Stag",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.PalmTrees,
    "sellPrice": 8000,
    "numBugsNeeded": 100,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 60,
    "name": "Golden Stag",
    "rarity": Rarity.Rare,
    "location": BugLocation.PalmTrees,
    "sellPrice": 12000,
    "numBugsNeeded": 100,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 61,
    "name": "Giraffe Stag",
    "rarity": Rarity.Rare,
    "location": BugLocation.PalmTrees,
    "sellPrice": 12000,
    "numBugsNeeded": 100,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 62,
    "name": "Horned Dynastid",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Trees,
    "sellPrice": 1350,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 63,
    "name": "Horned Atlas",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.PalmTrees,
    "sellPrice": 8000,
    "numBugsNeeded": 100,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 64,
    "name": "Horned Elephant",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.PalmTrees,
    "sellPrice": 8000,
    "numBugsNeeded": 100,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 65,
    "name": "Horned Hercules",
    "rarity": Rarity.Rare,
    "location": BugLocation.PalmTrees,
    "sellPrice": 12000,
    "numBugsNeeded": 100,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [17, 23]
    ],
    "monthRanges": [
      [7, 8]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 66,
    "name": "Walking Stick",
    "rarity": Rarity.Rare,
    "location": BugLocation.Trees,
    "sellPrice": 600,
    "numBugsNeeded": 20,
    "canBeRaining": true,

    "hourRanges": [
      [4, 7],
      [17, 18]
    ],
    "monthRanges": [
      [7, 11]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 67,
    "name": "Walking Leaf",
    "rarity": Rarity.Common,
    "location": BugLocation.UnderTrees,
    "sellPrice": 600,
    "numBugsNeeded": 20,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [7, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 68,
    "name": "Bagworm",
    "rarity": Rarity.Unknown,
    "location": BugLocation.ShakingTrees,
    "sellPrice": 600,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 69,
    "name": "Ant",
    "rarity": Rarity.Unknown,
    "location": BugLocation.RottenTurnips,
    "sellPrice": 80,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 70,
    "name": "Hermit Crab",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Beach,
    "sellPrice": 1000,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [19, 23]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 71,
    "name": "Wharf Roach",
    "rarity": Rarity.Common,
    "location": BugLocation.BeachRocks,
    "sellPrice": 200,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 72,
    "name": "Fly",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.Trash,
    "sellPrice": 60,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 73,
    "name": "Mosquito",
    "rarity": Rarity.Common,
    "location": BugLocation.Flying,
    "sellPrice": 130,
    "numBugsNeeded": 0,
    "canBeRaining": false,

    "hourRanges": [
      [0, 3],
      [17, 23]
    ],
    "monthRanges": [
      [6, 9]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 74,
    "name": "Flea",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.Villagers,
    "sellPrice": 70,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [4, 11]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 75,
    "name": "Snail",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.Rocks,
    "sellPrice": 250,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": true,
  },
  {

    "id": 76,
    "name": "Pill Bug",
    "rarity": Rarity.VeryCommon,
    "location": BugLocation.UnderRocks,
    "sellPrice": 250,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 15],
      [23, 23]
    ],
    "monthRanges": [
      [1, 6],
      [9, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 77,
    "name": "Centipede",
    "rarity": Rarity.Common,
    "location": BugLocation.UnderRocks,
    "sellPrice": 300,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 10],
      [16, 23]
    ],
    "monthRanges": [
      [1, 6],
      [9, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 78,
    "name": "Spider",
    "rarity": Rarity.Unknown,
    "location": BugLocation.ShakingTrees,
    "sellPrice": 600,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 7],
      [19, 23]
    ],
    "monthRanges": [
      [1, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 79,
    "name": "Tarantula",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.Ground,
    "sellPrice": 8000,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 3],
      [19, 23]
    ],
    "monthRanges": [
      [1, 4],
      [11, 12]
    ],
    "mustBeRaining": false,
  },
  {

    "id": 80,
    "name": "Scorpion",
    "rarity": Rarity.Uncommon,
    "location": BugLocation.Ground,
    "sellPrice": 8000,
    "numBugsNeeded": 0,
    "canBeRaining": true,

    "hourRanges": [
      [0, 3],
      [19, 23]
    ],
    "monthRanges": [
      [5, 10]
    ],
    "mustBeRaining": false,
  }
];
