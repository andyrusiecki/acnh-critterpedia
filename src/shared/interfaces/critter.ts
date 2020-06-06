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

/*

isAvailableAt(hour: number, month: number): boolean {
    return this.isInTimeRanges(hour, this.hourRanges) && this.isInTimeRanges(month, this.monthRanges);
  }

  private isInTimeRanges(time: number, ranges: number[][]): boolean {
    for (let [start, end] of ranges) {
      if (time >= start && time < end) {
        return true;
      }
    }

    return false;
  }
  */
