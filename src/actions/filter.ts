import { TimeFilter, Action, ActionType, FishLocationFilter, DonateFilter, BugLocationFilter } from './types';
import { CollectionType } from '../shared';

export function setTimeFilter(collectionType: CollectionType, filter: TimeFilter): Action {
  return {
    type: ActionType.SetTimeFilter,
    collectionType,
    filter,
  };
}

export function setLocationFilter(collectionType: CollectionType, filter: FishLocationFilter | BugLocationFilter): Action {
  return {
    type: ActionType.SetLocationFilter,
    collectionType,
    filter,
  };
}

export function setDonateFilter(collectionType: CollectionType, filter: DonateFilter): Action {
  return {
    type: ActionType.SetDonateFilter,
    collectionType,
    filter,
  };
}

export function setCurrentTime(hour: number, month: number): Action {
  return {
    type: ActionType.SetCurrentTime,
    hour,
    month,
  };
}
