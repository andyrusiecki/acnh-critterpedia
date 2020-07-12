import { AllFish, AllBugs } from "../data";
import { Fish, Bug, Critter } from "../types";
import { CollectionType } from "../types";

export function getCritterByID(collectionType: CollectionType, id: number): Critter | null {
  if (collectionType === 'bugs') {
    return getBugByID(id);
  }

  return getFishByID(id);
}

export function getBugByID(id: number): Bug | null {
  for (let i = 0; i < AllBugs.length; i++) {
    if (AllBugs[i].id === id) {
      return AllBugs[i];
    }
  }

  return null;
}

export function getFishByID(id: number): Fish | null {
  for (let i = 0; i < AllFish.length; i++) {
    if (AllFish[i].id === id) {
      return AllFish[i];
    }
  }

  return null;
}
