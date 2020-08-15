import { CollectionType } from '../types';
import { Action, ActionType } from './actionTypes';

/**
 * Returns an action for toggleDonate
 *
 * @export
 * @param {CollectionType} collectionType
 * @param {number} id
 * @returns {Action}
 */
export function toggleDonate(collectionType: CollectionType, id: number): Action {
  return {
    type: ActionType.ToggleDonate,
    collectionType,
    id,
  };
}

/**
 * Returns an action for setDonate
 *
 * @export
 * @param {CollectionType} collectionType
 * @param {number} id
 * @param {boolean} value
 * @returns {Action}
 */
export function setDonate(collectionType: CollectionType, id: number, value: boolean): Action {
  return {
    type: ActionType.SetDonate,
    collectionType,
    id,
    value,
  };
}
