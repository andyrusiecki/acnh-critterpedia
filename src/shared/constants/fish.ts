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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
    "type": "fish",
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
