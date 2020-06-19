import { Critter } from "../interfaces";

export function isAvailableAt(critter: Critter, hour?: number, month?: number): boolean {
  let isAvail = true;

  if (hour !== undefined) {
    isAvail = isAvail && isInTimeRanges(hour, critter.hourRanges)
  }

  if (month !== undefined) {
    isAvail = isAvail && isInTimeRanges(month, critter.monthRanges)
  }
  return isAvail;
}

export function isInTimeRanges(time: number, ranges: number[][]): boolean {
  for (let [start, end] of ranges) {
    if (time >= start && time <= end) {
      return true;
    }
  }

  return false;
}
