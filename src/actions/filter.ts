import { TimeFilter, SET_TIME_FILTER, FilterActionTypes, FishLocationFilter, SET_FISH_LOCATION_FILTER, DonateFilter, SET_DONATE_FILTER } from './types';

export function setTimeFilter(filter: TimeFilter): FilterActionTypes {
  return {
    type: SET_TIME_FILTER,
    filter,
  };
}

export function setFishLocationFilter(filter: FishLocationFilter): FilterActionTypes {
  return {
    type: SET_FISH_LOCATION_FILTER,
    filter,
  };
}

export function setDonateFilter(filter: DonateFilter): FilterActionTypes {
  return {
    type: SET_DONATE_FILTER,
    filter,
  };
}
