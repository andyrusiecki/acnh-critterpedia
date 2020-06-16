import { Fish, Rarity, FishLocation, FishShadow } from '../interfaces';

export const FishLocationDisplay: Map<FishLocation, string> = new Map([
  [ FishLocation.CliffTop, 'Cliff Top' ],
  [ FishLocation.Pier, 'Pier' ],
  [ FishLocation.Pond, 'Pond' ],
  [ FishLocation.River, 'River' ],
  [ FishLocation.RiverMouth, 'River Mouth' ],
  [ FishLocation.Sea, 'Sea' ],
]);

export const AllFish: Fish[] = [
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 1,
    "name": "Bitterling",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Small,
    "sellPrice": 900,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 3],
      [11, 12]
    ],
  },
  {
    "hourRanges": [
      [9, 15]
    ],
    "id": 2,
    "name": "Pale Chub",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.River,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 200,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 3,
    "name": "Crucian Carp",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Small,
    "sellPrice": 160,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 4,
    "name": "Dace",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Medium,
    "sellPrice": 240,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 5,
    "name": "Carp",
    "rarity": Rarity.Common,
    "location": FishLocation.Pond,
    "shadow": FishShadow.Large,
    "sellPrice": 300,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 6,
    "name": "Koi",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Pond,
    "shadow": FishShadow.Large,
    "sellPrice": 4000,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 7,
    "name": "Goldfish",
    "rarity": Rarity.Common,
    "location": FishLocation.Pond,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 1300,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [9, 15]
    ],
    "id": 8,
    "name": "Pop-eyed Goldfish",
    "rarity": Rarity.Common,
    "location": FishLocation.Pond,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 1300,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [9, 15]
    ],
    "id": 9,
    "name": "Ranchu Goldfish",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Pond,
    "shadow": FishShadow.Small,
    "sellPrice": 4500,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 10,
    "name": "Killifish",
    "rarity": Rarity.Common,
    "location": FishLocation.Pond,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 300,
    "mustBeRaining": false,
    "monthRanges": [
      [4, 8]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 11,
    "name": "Crawfish",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.Pond,
    "shadow": FishShadow.Small,
    "sellPrice": 200,
    "mustBeRaining": false,
    "monthRanges": [
      [4, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 12,
    "name": "Soft-shelled Turtle",
    "rarity": Rarity.Common,
    "location": FishLocation.River,
    "shadow": FishShadow.Large,
    "sellPrice": 3750,
    "mustBeRaining": false,
    "monthRanges": [
      [8, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 3],
      [21, 23]
    ],
    "id": 13,
    "name": "Snapping Turtle",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Large,
    "sellPrice": 5000,
    "mustBeRaining": false,
    "monthRanges": [
      [4, 10]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 14,
    "name": "Tadpole",
    "rarity": Rarity.Common,
    "location": FishLocation.Pond,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 100,
    "mustBeRaining": false,
    "monthRanges": [
      [3, 7]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 15,
    "name": "Frog",
    "rarity": Rarity.Common,
    "location": FishLocation.Pond,
    "shadow": FishShadow.Small,
    "sellPrice": 120,
    "mustBeRaining": false,
    "monthRanges": [
      [5, 8]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 16,
    "name": "Freshwater Goby",
    "rarity": Rarity.Common,
    "location": FishLocation.River,
    "shadow": FishShadow.Small,
    "sellPrice": 400,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 17,
    "name": "Loach",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Small,
    "sellPrice": 400,
    "mustBeRaining": false,
    "monthRanges": [
      [3, 5]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 18,
    "name": "Catfish",
    "rarity": Rarity.Common,
    "location": FishLocation.Pond,
    "shadow": FishShadow.Large,
    "sellPrice": 800,
    "mustBeRaining": false,
    "monthRanges": [
      [5, 10]
    ],
  },
  {
    "hourRanges": [
      [9, 15]
    ],
    "id": 19,
    "name": "Giant Snakehead",
    "rarity": Rarity.Rare,
    "location": FishLocation.Pond,
    "shadow": FishShadow.Large,
    "sellPrice": 5500,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 8]
    ],
  },
  {
    "hourRanges": [
      [9, 15]
    ],
    "id": 20,
    "name": "Bluegill",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Small,
    "sellPrice": 180,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 21,
    "name": "Yellow Perch",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Medium,
    "sellPrice": 300,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 3],
      [10, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 22,
    "name": "Black Bass",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Large,
    "sellPrice": 400,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 23,
    "name": "Tilapia",
    "rarity": Rarity.Common,
    "location": FishLocation.River,
    "shadow": FishShadow.Medium,
    "sellPrice": 800,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 10]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 24,
    "name": "Pike",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Large,
    "sellPrice": 1800,
    "mustBeRaining": false,
    "monthRanges": [
      [9, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 25,
    "name": "Pond Smelt",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.River,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 400,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 2],
      [12, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 26,
    "name": "Sweetfish",
    "rarity": Rarity.Common,
    "location": FishLocation.River,
    "shadow": FishShadow.Medium,
    "sellPrice": 900,
    "mustBeRaining": false,
    "monthRanges": [
      [7, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 27,
    "name": "Cherry Salmon",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.CliffTop,
    "shadow": FishShadow.Medium,
    "sellPrice": 1000,
    "mustBeRaining": false,
    "monthRanges": [
      [3, 6],
      [9, 11]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 28,
    "name": "Char",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.CliffTop,
    "shadow": FishShadow.Medium,
    "sellPrice": 3800,
    "mustBeRaining": false,
    "monthRanges": [
      [3, 6],
      [9, 11]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 29,
    "name": "Golden Trout",
    "rarity": Rarity.Rare,
    "location": FishLocation.CliffTop,
    "shadow": FishShadow.Medium,
    "sellPrice": 15000,
    "mustBeRaining": false,
    "monthRanges": [
      [3, 5],
      [9, 11]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 30,
    "name": "String Fish",
    "rarity": Rarity.Rare,
    "location": FishLocation.CliffTop,
    "shadow": FishShadow.Huge,
    "sellPrice": 15000,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 3],
      [12, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 31,
    "name": "Salmon",
    "rarity": Rarity.Common,
    "location": FishLocation.RiverMouth,
    "shadow": FishShadow.Large,
    "sellPrice": 700,
    "mustBeRaining": false,
    "monthRanges": [
      [9, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 32,
    "name": "King Salmon",
    "rarity": Rarity.Common,
    "location": FishLocation.RiverMouth,
    "shadow": FishShadow.Large,
    "sellPrice": 1800,
    "mustBeRaining": false,
    "monthRanges": [
      [9, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 33,
    "name": "Mitten Crab",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Small,
    "sellPrice": 2000,
    "mustBeRaining": false,
    "monthRanges": [
      [9, 11]
    ],
  },
  {
    "hourRanges": [
      [9, 15]
    ],
    "id": 34,
    "name": "Guppy",
    "rarity": Rarity.Common,
    "location": FishLocation.River,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 1300,
    "mustBeRaining": false,
    "monthRanges": [
      [4, 11]
    ],
  },
  {
    "hourRanges": [
      [9, 15]
    ],
    "id": 35,
    "name": "Nibble Fish",
    "rarity": Rarity.Common,
    "location": FishLocation.River,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 1500,
    "mustBeRaining": false,
    "monthRanges": [
      [5, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 36,
    "name": "AngelFish",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Small,
    "sellPrice": 3000,
    "mustBeRaining": false,
    "monthRanges": [
      [5, 10]
    ],
  },
  {
    "hourRanges": [
      [9, 15]
    ],
    "id": 37,
    "name": "Betta",
    "rarity": Rarity.Rare,
    "location": FishLocation.River,
    "shadow": FishShadow.Small,
    "sellPrice": 2500,
    "mustBeRaining": false,
    "monthRanges": [
      [5, 10]
    ],
  },
  {
    "hourRanges": [
      [9, 15]
    ],
    "id": 38,
    "name": "Neon Tetra",
    "rarity": Rarity.Common,
    "location": FishLocation.River,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 500,
    "mustBeRaining": false,
    "monthRanges": [
      [4, 11]
    ],
  },
  {
    "hourRanges": [
      [9, 15]
    ],
    "id": 39,
    "name": "Rainbowfish",
    "rarity": Rarity.Common,
    "location": FishLocation.River,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 800,
    "mustBeRaining": false,
    "monthRanges": [
      [5, 10]
    ],
  },
  {
    "hourRanges": [
      [0, 3],
      [9, 15],
      [21, 23]
    ],
    "id": 40,
    "name": "Piranha",
    "rarity": Rarity.Common,
    "location": FishLocation.River,
    "shadow": FishShadow.Small,
    "sellPrice": 2500,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 41,
    "name": "Arowana",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Large,
    "sellPrice": 10000,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [4, 20]
    ],
    "id": 42,
    "name": "Dorado",
    "rarity": Rarity.Rare,
    "location": FishLocation.River,
    "shadow": FishShadow.Large,
    "sellPrice": 15000,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 43,
    "name": "Gar",
    "rarity": Rarity.Rare,
    "location": FishLocation.Pond,
    "shadow": FishShadow.Huge,
    "sellPrice": 6000,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 44,
    "name": "Arapaima",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Huge,
    "sellPrice": 10000,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 3],
      [21, 23]
    ],
    "id": 45,
    "name": "Saddled Bichir",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.River,
    "shadow": FishShadow.Large,
    "sellPrice": 4000,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 46,
    "name": "Sturgeon",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.RiverMouth,
    "shadow": FishShadow.Huge,
    "sellPrice": 10000,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 3],
      [9, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 47,
    "name": "Sea Butterfly",
    "rarity": Rarity.Common,
    "location": FishLocation.Sea,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 1000,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 3],
      [12, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 48,
    "name": "Sea Horse",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 1100,
    "mustBeRaining": false,
    "monthRanges": [
      [4, 11]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 49,
    "name": "Clown Fish",
    "rarity": Rarity.Common,
    "location": FishLocation.Sea,
    "shadow": FishShadow.VerySmall,
    "sellPrice": 650,
    "mustBeRaining": false,
    "monthRanges": [
      [4, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 50,
    "name": "Surgeonfish",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Small,
    "sellPrice": 1000,
    "mustBeRaining": false,
    "monthRanges": [
      [4, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 51,
    "name": "Butterfly Fish",
    "rarity": Rarity.Common,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Small,
    "sellPrice": 1000,
    "mustBeRaining": false,
    "monthRanges": [
      [4, 9]
    ],
  },
  {
    "hourRanges": [
      [4, 20]
    ],
    "id": 52,
    "name": "Napoleonfish",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Huge,
    "sellPrice": 10000,
    "mustBeRaining": false,
    "monthRanges": [
      [7, 8]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 53,
    "name": "Zebra Turkeyfish",
    "rarity": Rarity.Common,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Medium,
    "sellPrice": 500,
    "mustBeRaining": false,
    "monthRanges": [
      [4, 11]
    ],
  },
  {
    "hourRanges": [
      [0, 3],
      [21, 23]
    ],
    "id": 54,
    "name": "Blowfish",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Medium,
    "sellPrice": 5000,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 2],
      [11, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 55,
    "name": "Puffer Fish",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Medium,
    "sellPrice": 250,
    "mustBeRaining": false,
    "monthRanges": [
      [7, 9]
    ],
  },
  {
    "hourRanges": [
      [4, 20]
    ],
    "id": 56,
    "name": "Anchovy",
    "rarity": Rarity.Common,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Small,
    "sellPrice": 200,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 57,
    "name": "Horse Mackerel",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Small,
    "sellPrice": 150,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 58,
    "name": "Barred Knifejaw",
    "rarity": Rarity.Common,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Medium,
    "sellPrice": 5000,
    "mustBeRaining": false,
    "monthRanges": [
      [3, 11]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 59,
    "name": "Sea Bass",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Large,
    "sellPrice": 400,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 60,
    "name": "Red Snapper",
    "rarity": Rarity.Common,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Large,
    "sellPrice": 3000,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 61,
    "name": "Dab",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Medium,
    "sellPrice": 300,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 4],
      [10, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 62,
    "name": "Olive Flounder",
    "rarity": Rarity.VeryCommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Large,
    "sellPrice": 800,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 63,
    "name": "Squid",
    "rarity": Rarity.Common,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Medium,
    "sellPrice": 500,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 8],
      [12, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 64,
    "name": "Moray Eel",
    "rarity": Rarity.Common,
    "location": FishLocation.Sea,
    "shadow": FishShadow.LongAndThin,
    "sellPrice": 2000,
    "mustBeRaining": false,
    "monthRanges": [
      [8, 10]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 65,
    "name": "Ribbon Eel",
    "rarity": Rarity.Common,
    "location": FishLocation.Sea,
    "shadow": FishShadow.LongAndThin,
    "sellPrice": 600,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 10]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 66,
    "name": "Tuna",
    "rarity": Rarity.Rare,
    "location": FishLocation.Pier,
    "shadow": FishShadow.Huge,
    "sellPrice": 7000,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 4],
      [11, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 67,
    "name": "Blue Marlin",
    "rarity": Rarity.Rare,
    "location": FishLocation.Pier,
    "shadow": FishShadow.Huge,
    "sellPrice": 10000,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 4],
      [7, 9],
      [11, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 68,
    "name": "Giant Trevally",
    "rarity": Rarity.Rare,
    "location": FishLocation.Pier,
    "shadow": FishShadow.Large,
    "sellPrice": 4500,
    "mustBeRaining": false,
    "monthRanges": [
      [5, 10]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 69,
    "name": "Mahi-Mahi",
    "rarity": Rarity.Rare,
    "location": FishLocation.Pier,
    "shadow": FishShadow.Large,
    "sellPrice": 6000,
    "mustBeRaining": false,
    "monthRanges": [
      [5, 10]
    ],
  },
  {
    "hourRanges": [
      [4, 20]
    ],
    "id": 70,
    "name": "Ocen Sunfish",
    "rarity": Rarity.Rare,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Finned,
    "sellPrice": 4000,
    "mustBeRaining": false,
    "monthRanges": [
      [7, 9]
    ],
  },
  {
    "hourRanges": [
      [4, 20]
    ],
    "id": 71,
    "name": "Ray",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Large,
    "sellPrice": 3000,
    "mustBeRaining": false,
    "monthRanges": [
      [8, 11]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 72,
    "name": "Saw Shark",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Finned,
    "sellPrice": 12000,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 73,
    "name": "Hammerhead Shark",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Finned,
    "sellPrice": 8000,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 74,
    "name": "Great White Shark",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Finned,
    "sellPrice": 15000,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 75,
    "name": "Whale Shark",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Finned,
    "sellPrice": 13000,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 76,
    "name": "Suckerfish",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Finned,
    "sellPrice": 1500,
    "mustBeRaining": false,
    "monthRanges": [
      [6, 9]
    ],
  },
  {
    "hourRanges": [
      [0, 8],
      [16, 23]
    ],
    "id": 77,
    "name": "Football Fish",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Large,
    "sellPrice": 2500,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 3],
      [11, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 78,
    "name": "Oarfish",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Huge,
    "sellPrice": 9000,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 5],
      [12, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 3],
      [21, 23]
    ],
    "id": 79,
    "name": "Barreleye",
    "rarity": Rarity.Rare,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Small,
    "sellPrice": 15000,
    "mustBeRaining": false,
    "monthRanges": [
      [1, 12]
    ],
  },
  {
    "hourRanges": [
      [0, 23]
    ],
    "id": 80,
    "name": "Coelacanth",
    "rarity": Rarity.Uncommon,
    "location": FishLocation.Sea,
    "shadow": FishShadow.Huge,
    "sellPrice": 15000,
    "mustBeRaining": true,
    "monthRanges": [
      [1, 12]
    ]
  }
];
