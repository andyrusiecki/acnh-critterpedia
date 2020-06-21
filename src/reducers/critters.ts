import { Action, ActionType } from "../actions";
import { CollectionState, InitialRootState, CollectionType } from "../shared";

export function getCritterReducer(collectionType: CollectionType) {
  return function(state: CollectionState = (collectionType === "bugs" ? InitialRootState.bugs : InitialRootState.fish), action: Action): CollectionState {
    switch (action.type) {
      case ActionType.ToggleDonate:
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
      case ActionType.SetDonate:
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
      case ActionType.SetTimeFilter:
        return Object.assign(
          {},
          state,
          {
            timeFilter: action.filter,
          },
        );
      case ActionType.SetLocationFilter:
        return Object.assign(
          {},
          state,
          {
            locationFilter: action.filter,
          },
        );
      case ActionType.SetDonateFilter:
        return Object.assign(
          {},
          state,
          {
            donateFilter: action.filter,
          },
        );
      default:
        return state;
    }
  }
}
