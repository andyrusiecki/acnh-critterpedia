import { RootState } from '../interfaces';
import { TimeFilter, FishLocationFilter, DonateFilter, } from '../../actions';

export const InitialRootState: RootState = {
  fish: {
    donations: [],
    filters: {
      time: TimeFilter.SHOW_ALL,
      location: FishLocationFilter.SHOW_ALL,
      donate: DonateFilter.SHOW_ALL,
    },
  },
};
