import { DonateActionTypes, SET_DONATE, TOGGLE_DONATE, SET_DONATE_FILTER, SET_FISH_LOCATION_FILTER, SET_TIME_FILTER, SetTimeFilterAction, SetFishLocationFilterAction, SetDonateFilterAction, TimeFilter, FishLocationFilter, DonateFilter } from "../actions";

export interface CollectionsState {
  fish: FishCollection;
}

export interface FishCollection {
  donations: number[];
  filters: {
    time: TimeFilter,
    location: FishLocationFilter,
    donate: DonateFilter,
  }
}

const initialState: CollectionsState = {
  fish: {
    donations: [],
    filters: {
      time: TimeFilter.SHOW_ALL,
      location: FishLocationFilter.SHOW_ALL,
      donate: DonateFilter.SHOW_ALL,
    }
  },
}

export function donate(state: CollectionsState = initialState, action: DonateActionTypes): CollectionsState {
  switch (action.type) {
    case TOGGLE_DONATE:
      if (action.collectionType === 'fish') {
        const index = state.fish.donations.indexOf(action.id);
        const donateIDs = state.fish.donations;

        if (index === -1) {
          donateIDs.push(action.id);
        } else {
          donateIDs.splice(index, 1);
        }

        return Object.assign(
          {},
          state,
          {
            fish: {
              donations: donateIDs,
            },
          },
        );
      } else {
        return state;
      }
    case SET_DONATE:
      if (action.collectionType === 'fish') {
        const index = state.fish.donations.indexOf(action.id);
        const donateIDs = state.fish.donations;

        if (index === -1 && action.value) {
          donateIDs.push(action.id);
        } else if (index > -1 && !action.value) {
          donateIDs.splice(index, 1);
        }

        return Object.assign(
          {},
          state,
          {
            fish: {
              donations: donateIDs,
            },
          },
        );
      } else {
        return state;
      }
    default:
      return state;
  }
}

export function timeFilter(state: CollectionsState = initialState, action: SetTimeFilterAction): CollectionsState {
  switch (action.type) {
    case SET_TIME_FILTER:
      return Object.assign(
        {},
        state,
        {
          time: action.filter,
        },
      );
    default:
      return state;
  }
}

export function fishLocationFilter(state: CollectionsState = initialState, action: SetFishLocationFilterAction): CollectionsState {
  switch (action.type) {
    case SET_FISH_LOCATION_FILTER:
      return Object.assign(
        {},
        state,
        {
          location: action.filter,
        },
      );
    default:
      return state;
  }
}

export function donateFilter(state: CollectionsState = initialState, action: SetDonateFilterAction): CollectionsState {
  switch (action.type) {
    case SET_DONATE_FILTER:
      return Object.assign(
        {},
        state,
        {
          donate: action.filter,
        },
      );
    default:
      return state;
  }
}

