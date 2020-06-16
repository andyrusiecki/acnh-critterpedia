import { TimeFilter, SET_TIME_FILTER, ActionTypes, FishLocationFilter, SET_FISH_LOCATION_FILTER, DonateFilter, SET_DONATE_FILTER } from './types';

export function setTimeFilter(filter: TimeFilter): ActionTypes {
  return {
    type: SET_TIME_FILTER,
    filter,
  };
}

export function setFishLocationFilter(filter: FishLocationFilter): ActionTypes {
  return {
    type: SET_FISH_LOCATION_FILTER,
    filter,
  };
}

export function setDonateFilter(filter: DonateFilter): ActionTypes {
  return {
    type: SET_DONATE_FILTER,
    filter,
  };
}
