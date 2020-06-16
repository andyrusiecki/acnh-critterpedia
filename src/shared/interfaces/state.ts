import { TimeFilter, FishLocationFilter, DonateFilter } from '../../actions';

export interface RootState {
  fish: FishCollectionState;
}

export interface FishCollectionState {
  donations: number[];
  timeFilter: TimeFilter,
  locationFilter: FishLocationFilter,
  donateFilter: DonateFilter,
}
