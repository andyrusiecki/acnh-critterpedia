import { Action, ActionType } from "../actions";
import { CollectionState, InitialRootState, CollectionType } from "../shared";

export function getCritterReducer(collectionType: CollectionType) {
  return function(state: CollectionState = (collectionType === "bugs" ? InitialRootState.bugs : InitialRootState.fish), action: Action): CollectionState {
    switch (action.type) {
      case ActionType.ToggleDonate:
        if (action.collectionType !== collectionType) return state;
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
        if (action.collectionType !== collectionType) return state;
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
        if (action.collectionType !== collectionType) return state;
        return Object.assign(
          {},
          state,
          {
            timeFilter: action.filter,
          },
        );
      case ActionType.SetLocationFilter:
        if (action.collectionType !== collectionType) return state;
        return Object.assign(
          {},
          state,
          {
            locationFilter: action.filter,
          },
        );
      case ActionType.SetDonateFilter:
        if (action.collectionType !== collectionType) return state;
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
