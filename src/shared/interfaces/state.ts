import { TimeFilter, FishLocationFilter, DonateFilter } from '../../actions';

export interface RootState {
  time: CurrentTimeState,
  fish: FishCollectionState,
}

export interface CurrentTimeState {
  hour: number,
  month: number,
}

export interface FishCollectionState {
  donations: number[];
  timeFilter: TimeFilter,
  locationFilter: FishLocationFilter,
  donateFilter: DonateFilter,
}
