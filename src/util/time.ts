import moment from "moment";
import { Critter } from "../types";

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

export function hourToDisplayText(hour: number): string {
  return moment(hour.toString(), 'H').format('h:00 a');
}

export function monthToDisplayText(month: number): string {
  return moment(month.toString(), 'M').format('MMMM');
}
