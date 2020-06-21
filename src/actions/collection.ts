import { CollectionType } from '../shared';
import { Action, ActionType } from './types';

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
