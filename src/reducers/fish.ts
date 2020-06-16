import { ActionTypes, SET_DONATE, TOGGLE_DONATE, SET_DONATE_FILTER, SET_FISH_LOCATION_FILTER, SET_TIME_FILTER } from "../actions";
import { FishCollectionState, InitialRootState } from "../shared";

export function fish(state: FishCollectionState = InitialRootState.fish, action: ActionTypes): FishCollectionState {
  switch (action.type) {
    case TOGGLE_DONATE:
      const index = state.donations.indexOf(action.id);
      const donateIDs = state.donations;

      if (index === -1) {
        donateIDs.push(action.id);
      } else {
        donateIDs.splice(index, 1);
      }

      return Object.assign(
        {},
        state,
        {
          donations: donateIDs,
        },
      );
    case SET_DONATE:
      const setIndex = state.donations.indexOf(action.id);
      const setDonateIDs = state.donations;

      if (setIndex === -1 && action.value) {
        setDonateIDs.push(action.id);
      } else if (setIndex > -1 && !action.value) {
        setDonateIDs.splice(setIndex, 1);
      }

      return Object.assign(
        {},
        state,
        {
          donations: setDonateIDs,
        },
      );
    case SET_TIME_FILTER:
      return Object.assign(
        {},
        state,
        {
          filters: {
            time: action.filter,
          },
        },
      );
    case SET_FISH_LOCATION_FILTER:
      return Object.assign(
        {},
        state,
        {
          filters: {
            location: action.filter,
          },
        },
      );
    case SET_DONATE_FILTER:
      return Object.assign(
        {},
        state,
        {
          filters: {
            donate: action.filter,
          },
        },
      );
    default:
      return state;
  }
}
