import { ActionType, Action } from "../actions";
import { CurrentTimeState, InitialRootState } from "../shared";

export function time(state: CurrentTimeState = InitialRootState.time, action: Action): CurrentTimeState {
  switch (action.type) {
    case ActionType.SetCurrentTime:
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
