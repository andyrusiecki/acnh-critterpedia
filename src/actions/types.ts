import { CollectionType } from '../shared';

// Donate Actions
export const TOGGLE_DONATE = 'TOGGLE_DONATE';
export const SET_DONATE = 'SET_DONATE';

export interface ToggleDonateAction {
  type: typeof TOGGLE_DONATE;
  collectionType: CollectionType;
  id: number;
}

export interface SetDonateAction {
  type: typeof SET_DONATE;
  collectionType: CollectionType;
  id: number;
  value: boolean;
}

// Filter Actions
// => Time Filter
export const SET_TIME_FILTER = 'SET_TIME_FILTER';

export interface SetTimeFilterAction {
  type: typeof SET_TIME_FILTER,
  filter: TimeFilter,
}

export enum TimeFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_CURRENT_TIME = 'SHOW_CURRENT_TIME',
  SHOW_CUSTOM_TIME = 'SHOW_CUSTOM_TIME',
};

// => FishLocation Filter
export const SET_FISH_LOCATION_FILTER = 'SET_FISH_LOCATION_FILTER';

export interface SetFishLocationFilterAction {
  type: typeof SET_FISH_LOCATION_FILTER,
  filter: FishLocationFilter,
}

export enum FishLocationFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_CLIFF_TOP = 'SHOW_CLIFF_TOP',
  SHOW_PIER = 'SHOW_PIER',
  SHOW_POND = 'SHOW_POND',
  SHOW_RIVER = 'SHOW_RIVER',
  SHOW_RIVER_MOUTH = 'SHOW_RIVER_MOUTH',
  SHOW_SEA = 'SHOW_SEA',
}

// => Donated Filter
export const SET_DONATE_FILTER = 'SET_DONATE_FILTER';

export interface SetDonateFilterAction {
  type: typeof SET_DONATE_FILTER,
  filter: DonateFilter,
}

export enum DonateFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_DONATED = 'SHOW_DONATED',
  SHOW_NOT_DONATED = 'SHOW_NOT_DONATED',
};

export type ActionTypes =
  ToggleDonateAction |
  SetDonateAction |
  SetTimeFilterAction |
  SetFishLocationFilterAction |
  SetDonateFilterAction;
