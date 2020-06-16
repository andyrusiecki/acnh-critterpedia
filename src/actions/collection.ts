import { CollectionType } from '../shared';
import { TOGGLE_DONATE, SET_DONATE, ActionTypes } from './types';

export function toggleDonate(collectionType: CollectionType, id: number): ActionTypes {
  return {
    type: TOGGLE_DONATE,
    collectionType,
    id,
  };
}

export function setDonate(collectionType: CollectionType, id: number, value: boolean): ActionTypes {
  return {
    type: SET_DONATE,
    collectionType,
    id,
    value,
  };
}
