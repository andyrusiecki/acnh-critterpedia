import { applyMiddleware } from "redux";
import logger from 'redux-logger';
import crashReporter from "./crashReporter";

export default applyMiddleware(
  logger,
  crashReporter,
)
