export interface Critter {
  id: number;
  name: string;
  thumbnailImageURL: string;
  fullImageURL: string;
  rarity: Rarity;
  monthRanges: number[][];
  hourRanges: number[][];
  sellPrice: number;
}

export enum Rarity {
  VeryCommon,
  Common,
  Uncommon,
  Rare,
}
