
import { RootState, CollectionType, CollectionState } from '../types';
import { isLocalStorageSupported, saveToLocalStorage, getFromLocalStorage } from './localStorage';
import { isCookieSupported, saveToCookie, getFromCookie } from './cookies';

export function saveStateToStorage(state: RootState) {
  if (isLocalStorageSupported()) {
    saveToLocalStorage('state', state);
  } else if (isCookieSupported()) {
    saveToCookie('state', state);
  }
}

export function getStateFromStorage(): RootState | undefined {
  let state: RootState | undefined = undefined;
  if (isLocalStorageSupported()) {
    state = getFromLocalStorage('state');
  }

  if (state === undefined && isCookieSupported()) {
    state = getFromCookie('state');
  }

  return state;
}

export function getCollectionState(collectionType: CollectionType, rootState: RootState): CollectionState {
  if (collectionType === "bugs") {
    return rootState.bugs;
  }

  if (collectionType === "fish") {
    return rootState.fish;
  }

  return rootState.seaCreatures;
}
