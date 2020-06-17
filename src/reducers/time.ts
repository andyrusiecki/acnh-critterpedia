import { ActionTypes, SET_CURRENT_TIME } from "../actions";
import { CurrentTimeState, InitialRootState } from "../shared";

export function time(state: CurrentTimeState = InitialRootState.time, action: ActionTypes): CurrentTimeState {
  switch (action.type) {
    case SET_CURRENT_TIME:
      return Object.assign(
        {},
        state,
        {
          hour: action.hour,
          month: action.month,
        }
      );
    default:
      return state;
  }
}
