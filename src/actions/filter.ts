import { TimeFilter, Action, ActionType, FishLocationFilter, DonateFilter, BugLocationFilter } from './actionTypes';
import { CollectionType } from '../types';

/**
 * Returns an action for setTimeFilter
 *
 * @export
 * @param {CollectionType} collectionType
 * @param {TimeFilter} filter
 * @returns {Action}
 */
export function setTimeFilter(collectionType: CollectionType, filter: TimeFilter): Action {
  return {
    type: ActionType.SetTimeFilter,
    collectionType,
    filter,
  };
}

/**
 * Returns an action for SetLocationFilter
 *
 * @export
 * @param {CollectionType} collectionType
 * @param {(FishLocationFilter | BugLocationFilter)} filter
 * @returns {Action}
 */
export function setLocationFilter(collectionType: CollectionType, filter: FishLocationFilter | BugLocationFilter): Action {
  return {
    type: ActionType.SetLocationFilter,
    collectionType,
    filter,
  };
}

/**
 * Returns an action for setDonateFilter
 *
 * @export
 * @param {CollectionType} collectionType
 * @param {DonateFilter} filter
 * @returns {Action}
 */
export function setDonateFilter(collectionType: CollectionType, filter: DonateFilter): Action {
  return {
    type: ActionType.SetDonateFilter,
    collectionType,
    filter,
  };
}

/**
 * Returns an action for setCurrentTime
 *
 * @export
 * @param {number} hour
 * @param {number} month
 * @returns {Action}
 */
export function setCurrentTime(hour: number, month: number): Action {
  return {
    type: ActionType.SetCurrentTime,
    hour,
    month,
  };
}
