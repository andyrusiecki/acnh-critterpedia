import { RootState } from '../interfaces';
import { TimeFilter, FishLocationFilter, DonateFilter, BugLocationFilter, } from '../../actions';

const now = new Date();

export const InitialRootState: RootState = {
  time: {
    hour: now.getHours(),
    month: now.getMonth() + 1,
  },
  bugs: {
    donations: [],
    timeFilter: TimeFilter.SHOW_ALL,
    locationFilter: BugLocationFilter.SHOW_ALL,
    donateFilter: DonateFilter.SHOW_ALL,
  },
  fish: {
    donations: [],
    timeFilter: TimeFilter.SHOW_ALL,
    locationFilter: FishLocationFilter.SHOW_ALL,
    donateFilter: DonateFilter.SHOW_ALL,
  },
};
