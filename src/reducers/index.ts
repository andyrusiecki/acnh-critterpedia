import { combineReducers } from 'redux';
import { donate, timeFilter, fishLocationFilter, donateFilter } from './collection';

export default combineReducers({
  donate,
  timeFilter,
  fishLocationFilter,
  donateFilter,
})
