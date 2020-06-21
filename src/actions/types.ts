import { CollectionType } from '../shared';

export enum ActionType {
  ToggleDonate,
  SetDonate,
  SetTimeFilter,
  SetLocationFilter,
  SetDonateFilter,
  SetCurrentTime,
}

export type Action =
  ToggleDonateAction |
  SetDonateAction |
  SetTimeFilterAction |
  SetLocationFilterAction |
  SetDonateFilterAction |
  SetCurrentTimeAction;

// Donate Actions
export interface ToggleDonateAction {
  type: ActionType.ToggleDonate;
  collectionType: CollectionType;
  id: number;
}

export interface SetDonateAction {
  type: ActionType.SetDonate;
  collectionType: CollectionType;
  id: number;
  value: boolean;
}

// Filter Actions
// => Time Filter
export interface SetTimeFilterAction {
  type: ActionType.SetTimeFilter,
  collectionType: CollectionType;
  filter: TimeFilter,
}

export enum TimeFilter {
  SHOW_ALL,
  SHOW_CURRENT_TIME,
  SHOW_CURRENT_MONTH,
};

// => FishLocation Filter
export interface SetLocationFilterAction {
  type: ActionType.SetLocationFilter,
  collectionType: CollectionType,
  filter: FishLocationFilter | BugLocationFilter,
}

export enum FishLocationFilter {
  SHOW_ALL,
  SHOW_CLIFF_TOP,
  SHOW_PIER,
  SHOW_POND,
  SHOW_RIVER,
  SHOW_RIVER_MOUTH,
  SHOW_SEA,
}

export enum BugLocationFilter {
  SHOW_ALL,
  SHOW_BEACH,
  SHOW_BEACH_ROCKS,
  SHOW_BUILDING_LIGHTS,
  SHOW_FLOWERS,
  SHOW_FLYING,
  SHOW_FLYING_FLOWERS,
  SHOW_GROUND,
  SHOW_PALM_TREES,
  SHOW_ROCKS,
  SHOW_ROTTEN_TURNIPS,
  SHOW_SHAKING_TREES,
  SHOW_SNOWBALL,
  SHOW_TRASH,
  SHOW_TREES,
  SHOW_TREE_STUMPS,
  SHOW_UNDERGROUND,
  SHOW_UNDER_ROCKS,
  SHOW_UNDER_TREES,
  SHOW_VILLAGERS,
  SHOW_WATER_SURFACE,
}

// => Donated Filter
export interface SetDonateFilterAction {
  type: ActionType.SetDonateFilter,
  collectionType: CollectionType,
  filter: DonateFilter,
}

export enum DonateFilter {
  SHOW_ALL,
  SHOW_DONATED,
  SHOW_NOT_DONATED,
};

// Current Time
export interface SetCurrentTimeAction {
  type: ActionType.SetCurrentTime,
  hour: number,
  month: number,
}


