import { combineReducers } from 'redux';
import { getCritterReducer } from './critters';
import { time } from './time';

export default combineReducers({
  time,
  fish: getCritterReducer("fish"),
  bugs: getCritterReducer("bugs"),
  seaCreatures: getCritterReducer("sea-creatures"),
})
