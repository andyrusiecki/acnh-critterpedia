import { TimeFilter, FishLocationFilter, DonateFilter } from '../../actions';

export interface RootState {
  fish: FishCollectionState;
}

export interface FishCollectionState {
  donations: number[];
  filters: {
    time: TimeFilter,
    location: FishLocationFilter,
    donate: DonateFilter,
  }
}
