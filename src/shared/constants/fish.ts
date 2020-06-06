import { Fish, Rarity, FishLocation, FishShadow } from '../interfaces';

export const ALL_FISH: Fish[] = [
  {
    id: 1,
    name: "Test Fish 1",
    thumbnailImageURL: "",
    fullImageURL: "",
    rarity: Rarity.Common,
    monthRanges: [
      [1,4],
      [8,11],
    ],
    hourRanges: [
      [0,9],
      [18,23],
    ],
    sellPrice: 500,
    location: FishLocation.River,
    shadow: FishShadow.Large,
    mustBeRaining: false,
  },
  {
    id: 2,
    name: "Test Fish 2",
    thumbnailImageURL: "",
    fullImageURL: "",
    rarity: Rarity.Uncommon,
    monthRanges: [
      [6,7],
    ],
    hourRanges: [
      [12,16],
    ],
    sellPrice: 1000,
    location: FishLocation.Pond,
    shadow: FishShadow.Finned,
    mustBeRaining: true,
  },
];
