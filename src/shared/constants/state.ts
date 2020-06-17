import { RootState } from '../interfaces';
import { TimeFilter, FishLocationFilter, DonateFilter, } from '../../actions';

const now = new Date();

export const InitialRootState: RootState = {
  time: {
    hour: now.getHours(),
    month: now.getMonth() + 1,
  },
  fish: {
    donations: [],
    timeFilter: TimeFilter.SHOW_ALL,
    locationFilter: FishLocationFilter.SHOW_ALL,
    donateFilter: DonateFilter.SHOW_ALL,
  },
};
