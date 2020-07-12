import { CollectionType } from '../types';
import { Action, ActionType } from './actionTypes';

export function toggleDonate(collectionType: CollectionType, id: number): Action {
  return {
    type: ActionType.ToggleDonate,
    collectionType,
    id,
  };
}

export function setDonate(collectionType: CollectionType, id: number, value: boolean): Action {
  return {
    type: ActionType.SetDonate,
    collectionType,
    id,
    value,
  };
}
