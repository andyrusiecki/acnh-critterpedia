export interface Critter {
  id: number;
  name: string;
  rarity: Rarity;
  monthRanges: number[][];
  hourRanges: number[][];
  sellPrice: number;
  donated: boolean;
}

export enum Rarity {
  VeryCommon = 'very-common',
  Common = 'common',
  Uncommon = 'uncommon',
  Rare = 'rare',
}

export const RarityDisplay: Map<Rarity, string> = new Map([
  [ Rarity.VeryCommon, 'Very Common' ],
  [ Rarity.Common, 'Common' ],
  [ Rarity.Uncommon, 'Uncommon' ],
  [ Rarity.Rare, 'Rare' ],
]);
