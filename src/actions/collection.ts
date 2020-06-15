import { CollectionType } from '../shared';
import { TOGGLE_DONATE, SET_DONATE, DonateActionTypes } from './types';

export function toggleDonate(collectionType: CollectionType, id: number): DonateActionTypes {
  return {
    type: TOGGLE_DONATE,
    collectionType,
    id,
  };
}

export function setDonate(collectionType: CollectionType, id: number, value: boolean): DonateActionTypes {
  return {
    type: SET_DONATE,
    collectionType,
    id,
    value,
  };
}
