import Redux, { AnyAction, MiddlewareAPI } from "redux";
import { Dispatch } from "react";

const crashReporter: Redux.Middleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  try {
    return next(action)
  } catch (err) {
    // TODO: had error reporting
    console.error(err)
    throw err
  }
}

export default crashReporter;
