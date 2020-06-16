import { RootState } from '../interfaces';
import { TimeFilter, FishLocationFilter, DonateFilter, } from '../../actions';

export const InitialRootState: RootState = {
  fish: {
    donations: [],
    timeFilter: TimeFilter.SHOW_ALL,
    locationFilter: FishLocationFilter.SHOW_ALL,
    donateFilter: DonateFilter.SHOW_ALL,
  },
};
