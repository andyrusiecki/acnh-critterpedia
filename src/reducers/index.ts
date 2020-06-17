import { combineReducers } from 'redux';
import { fish } from './fish';
import { time } from './time';

export default combineReducers({
  time,
  fish,
})
