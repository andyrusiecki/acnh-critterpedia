import { SeaCreature, SeaCreatureSpeed, SeaCreatureShadow } from '../types';

export const SeaCreatureSpeedDisplay: Map<SeaCreatureSpeed, string> = new Map([
  [ SeaCreatureSpeed.DoesNotMove, 'Does Not Move' ],
  [ SeaCreatureSpeed.Slow, 'Slow' ],
  [ SeaCreatureSpeed.Normal, 'Normal' ],
  [ SeaCreatureSpeed.Fast, 'Fast' ],
]);

export const AllSeaCreatures: SeaCreature[] = [
  {
    "id": 1,
    "type": "sea-creatures",
    "name": "Seaweed",
    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 7],
      [10, 12],
    ],
    "shadow": SeaCreatureShadow.Small,
    "speed": SeaCreatureSpeed.DoesNotMove,
    "sellPrice": 600,
  },
  {
    "id": 2,
    "type": "sea-creatures",
    "name": "Sea Grapes",
    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [6, 9],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.DoesNotMove,
    "sellPrice": 900,
  },
  {
    "id": 3,
    "type": "sea-creatures",
    "name": "Sea Cucumber",
    "hourRanges": [
      [0, 23]
    ],
    "monthRanges": [
      [1, 4],
      [11, 12],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Slow,
    "sellPrice": 500,
  },
  {
    "id": 4,
    "type": "sea-creatures",
    "name": "Sea Pig",
    "hourRanges": [
      [0, 9],
      [16, 23],
    ],
    "monthRanges": [
      [1, 2],
      [11, 12],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Fast,
    "sellPrice": 10000,
  },
  {
    "id": 5,
    "type": "sea-creatures",
    "name": "Sea Star",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 12],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.DoesNotMove,
    "sellPrice": 500,
  },
  {
    "id": 6,
    "type": "sea-creatures",
    "name": "Sea Urchin",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [5, 9],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.DoesNotMove,
    "sellPrice": 1700,
  },
  {
    "id": 7,
    "type": "sea-creatures",
    "name": "Slate Pencil Urchin",
    "hourRanges": [
      [0, 9],
      [16, 23],
    ],
    "monthRanges": [
      [5, 9],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 2000,
  },
  {
    "id": 8,
    "type": "sea-creatures",
    "name": "Sea Anemone",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 12],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.DoesNotMove,
    "sellPrice": 500,
  },
  {
    "id": 9,
    "type": "sea-creatures",
    "name": "Moon Jellyfish",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [7, 9],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Slow,
    "sellPrice": 600,
  },
  {
    "id": 10,
    "type": "sea-creatures",
    "name": "Sea Slug",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 12],
    ],
    "shadow": SeaCreatureShadow.VerySmall,
    "speed": SeaCreatureSpeed.Slow,
    "sellPrice": 600,
  },
  {
    "id": 11,
    "type": "sea-creatures",
    "name": "Pearl Oyster",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 12],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Fast,
    "sellPrice": 2800,
  },
  {
    "id": 12,
    "type": "sea-creatures",
    "name": "Mussel",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [6, 12],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.DoesNotMove,
    "sellPrice": 1500,
  },
  {
    "id": 13,
    "type": "sea-creatures",
    "name": "Oyster",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 2],
      [9, 12],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Slow,
    "sellPrice": 1100,
  },
  {
    "id": 14,
    "type": "sea-creatures",
    "name": "Scallop",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 12],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 1200,
  },
  {
    "id": 15,
    "type": "sea-creatures",
    "name": "Whelk",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 12],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Slow,
    "sellPrice": 1000,
  },
  {
    "id": 16,
    "type": "sea-creatures",
    "name": "Turban Shell",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [3, 5],
      [9, 12],
    ],
    "shadow": SeaCreatureShadow.Small,
    "speed": SeaCreatureSpeed.Slow,
    "sellPrice": 1000,
  },
  {
    "id": 17,
    "type": "sea-creatures",
    "name": "Abalone",
    "hourRanges": [
      [0, 9],
      [16, 23],
    ],
    "monthRanges": [
      [1, 1],
      [6, 12],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 2000,
  },
  {
    "id": 18,
    "type": "sea-creatures",
    "name": "Gigas Giant Clam",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [5, 9],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Fast,
    "sellPrice": 15000,
  },
  {
    "id": 19,
    "type": "sea-creatures",
    "name": "Chambered Nautilus",
    "hourRanges": [
      [0, 9],
      [16, 23],
    ],
    "monthRanges": [
      [3, 6],
      [9, 11],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Slow,
    "sellPrice": 1800,
  },
  {
    "id": 20,
    "type": "sea-creatures",
    "name": "Octopus",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 12],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 1200,
  },
  {
    "id": 21,
    "type": "sea-creatures",
    "name": "Umbrella Octopus",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [3, 5],
      [9, 11],
    ],
    "shadow": SeaCreatureShadow.Small,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 6000,
  },
  {
    "id": 22,
    "type": "sea-creatures",
    "name": "Vampire Squid",
    "hourRanges": [
      [0, 9],
      [16, 23],
    ],
    "monthRanges": [
      [5, 8],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Fast,
    "sellPrice": 10000,
  },
  {
    "id": 23,
    "type": "sea-creatures",
    "name": "Firefly Squid",
    "hourRanges": [
      [0, 4],
      [21, 23],
    ],
    "monthRanges": [
      [5, 8],
    ],
    "shadow": SeaCreatureShadow.Small,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 1400,
  },
  {
    "id": 24,
    "type": "sea-creatures",
    "name": "Gazami Crab",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [6, 11],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 2200,
  },
  {
    "id": 25,
    "type": "sea-creatures",
    "name": "Dungeness Crab",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 5],
      [11, 12],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Slow,
    "sellPrice": 1900,
  },
  {
    "id": 26,
    "type": "sea-creatures",
    "name": "Snow Crab",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 4],
      [11, 12],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Fast,
    "sellPrice": 6000,
  },
  {
    "id": 27,
    "type": "sea-creatures",
    "name": "Red King Crab",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 3],
      [11, 12],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Fast,
    "sellPrice": 8000,
  },
  {
    "id": 28,
    "type": "sea-creatures",
    "name": "Acorn Barnacle",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 12],
    ],
    "shadow": SeaCreatureShadow.VerySmall,
    "speed": SeaCreatureSpeed.DoesNotMove,
    "sellPrice": 600,
  },
  {
    "id": 29,
    "type": "sea-creatures",
    "name": "Spider Crab",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [3, 4],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Fast,
    "sellPrice": 12000,
  },
  {
    "id": 30,
    "type": "sea-creatures",
    "name": "Tiger Prawn",
    "hourRanges": [
      [0, 9],
      [16, 23],
    ],
    "monthRanges": [
      [6, 9],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 3000,
  },
  {
    "id": 31,
    "type": "sea-creatures",
    "name": "Sweet Shrimp",
    "hourRanges": [
      [0, 9],
      [16, 23],
    ],
    "monthRanges": [
      [1, 2],
      [9, 12],
    ],
    "shadow": SeaCreatureShadow.Small,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 1400,
  },
  {
    "id": 32,
    "type": "sea-creatures",
    "name": "Mantis Shrimp",
    "hourRanges": [
      [0, 9],
      [16, 23],
    ],
    "monthRanges": [
      [1, 12],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 2500,
  },
  {
    "id": 33,
    "type": "sea-creatures",
    "name": "Spiny Lobster",
    "hourRanges": [
      [0, 4],
      [21, 23],
    ],
    "monthRanges": [
      [10, 12],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 5000,
  },
  {
    "id": 34,
    "type": "sea-creatures",
    "name": "Lobster",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 1],
      [4, 6],
      [12, 12],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Fast,
    "sellPrice": 4500,
  },
  {
    "id": 35,
    "type": "sea-creatures",
    "name": "Giant Isopod",
    "hourRanges": [
      [0, 4],
      [9, 16],
      [21, 23],
    ],
    "monthRanges": [
      [7, 10],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Fast,
    "sellPrice": 12000,
  },
  {
    "id": 36,
    "type": "sea-creatures",
    "name": "Horseshoe Crab",
    "hourRanges": [
      [0, 4],
      [21, 23],
    ],
    "monthRanges": [
      [7, 9],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 2500,
  },
  {
    "id": 37,
    "type": "sea-creatures",
    "name": "Sea Pineapple",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [4, 8],
    ],
    "shadow": SeaCreatureShadow.Small,
    "speed": SeaCreatureSpeed.DoesNotMove,
    "sellPrice": 1500,
  },
  {
    "id": 38,
    "type": "sea-creatures",
    "name": "Spotted Garden Eel",
    "hourRanges": [
      [0, 4],
      [21, 23],
    ],
    "monthRanges": [
      [5, 10],
    ],
    "shadow": SeaCreatureShadow.Medium,
    "speed": SeaCreatureSpeed.Slow,
    "sellPrice": 1100,
  },
  {
    "id": 39,
    "type": "sea-creatures",
    "name": "Flatworm",
    "hourRanges": [
      [0, 9],
      [16, 23],
    ],
    "monthRanges": [
      [8, 9],
    ],
    "shadow": SeaCreatureShadow.VerySmall,
    "speed": SeaCreatureSpeed.Normal,
    "sellPrice": 700,
  },
  {
    "id": 40,
    "type": "sea-creatures",
    "name": "Venus' Flower Basket",
    "hourRanges": [
      [0, 23],
    ],
    "monthRanges": [
      [1, 2],
      [10, 12],
    ],
    "shadow": SeaCreatureShadow.Large,
    "speed": SeaCreatureSpeed.Fast,
    "sellPrice": 5000,
  },
];
