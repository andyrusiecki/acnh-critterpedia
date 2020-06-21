import { TimeFilter, FishLocationFilter, DonateFilter, BugLocationFilter } from '../../actions';

export interface RootState {
  time: CurrentTimeState,
  fish: CollectionState,
  bugs: CollectionState,
}

export interface CurrentTimeState {
  hour: number,
  month: number,
}

export interface CollectionState {
  donations: number[];
  timeFilter: TimeFilter,
  locationFilter: BugLocationFilter | FishLocationFilter,
  donateFilter: DonateFilter,
}
