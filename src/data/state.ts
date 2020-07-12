import { RootState } from '../types';
import { TimeFilter, FishLocationFilter, DonateFilter, BugLocationFilter, } from '../actions';

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
  seaCreatures: {
    donations: [],
    timeFilter: TimeFilter.SHOW_ALL,
    donateFilter: DonateFilter.SHOW_ALL,
  },
};
