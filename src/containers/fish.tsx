import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { setTimeFilter, setFishLocationFilter, setDonateFilter, TimeFilter, FishLocationFilter, DonateFilter, toggleDonate, setDonate } from '../actions';
import { Fish, FishLocation, AllFish, RootState } from '../shared';
import { Filter, FilterOption } from '../components/filter';
import { CritterList } from '../components/critterList';

interface FishContainerProps {
  selectedIDs: number[];
  donatedIDs: number[];

  toggleDonate: (id: number) => void;
  setDonate: (id: number, isDonated: boolean) => void;
  setTimeFilter: (filter: TimeFilter) => void;
  setLocationFilter: (filter: FishLocationFilter) => void;
  setDonateFilter: (filter: DonateFilter) => void;
}

function getSelectedFishIDs(fish: Fish[], donatedIDs: number[], timeFilter: TimeFilter, locationFilter: FishLocationFilter, donateFilter: DonateFilter): number[] {
  let filteredFish = fish;
  filteredFish = filterFishByTime(filteredFish, timeFilter);
  filteredFish = filterFishByLocation(filteredFish, locationFilter);
  filteredFish = filterFishByDonate(filteredFish, donatedIDs, donateFilter);

  return filteredFish.map(fish => fish.id);
}

function filterFishByTime(fish: Fish[], filter: TimeFilter): Fish[] {
  switch (filter) {
    case TimeFilter.SHOW_ALL:
      return fish;
    case TimeFilter.SHOW_CURRENT_TIME:
      const date = new Date();
      const hour = date.getHours();
      const month = date.getMonth() + 1;

      return fish.filter((fish: Fish) => {
        return isAvailableAt(fish, hour, month);
      });
    default:
      return fish;
  }
}

function isAvailableAt(fish: Fish, hour?: number, month?: number): boolean {
  let isAvail = true;

  if (hour !== undefined) {
    isAvail = isAvail && isInTimeRanges(hour, fish.hourRanges)
  }

  if (month !== undefined) {
    isAvail = isAvail && isInTimeRanges(month, fish.monthRanges)
  }
  return isAvail;
}

function isInTimeRanges(time: number, ranges: number[][]): boolean {
  for (let [start, end] of ranges) {
    if (time >= start && time <= end) {
      return true;
    }
  }

  return false;
}

function filterFishByLocation(fish: Fish[], filter: FishLocationFilter): Fish[] {
  switch (filter) {
    case FishLocationFilter.SHOW_ALL:
      return fish;
    case FishLocationFilter.SHOW_CLIFF_TOP:
      return fish.filter((fish: Fish) => fish.location === FishLocation.CliffTop);
    case FishLocationFilter.SHOW_PIER:
      return fish.filter((fish: Fish) => fish.location === FishLocation.Pier);
    case FishLocationFilter.SHOW_POND:
      return fish.filter((fish: Fish) => fish.location === FishLocation.Pond);
    case FishLocationFilter.SHOW_RIVER:
      return fish.filter((fish: Fish) => fish.location === FishLocation.River);
    case FishLocationFilter.SHOW_RIVER_MOUTH:
      return fish.filter((fish: Fish) => fish.location === FishLocation.RiverMouth);
    case FishLocationFilter.SHOW_SEA:
      return fish.filter((fish: Fish) => fish.location === FishLocation.Sea);
    default:
      return fish;
  }
}

function filterFishByDonate(fish: Fish[], donatedIDs: number[], filter: DonateFilter): Fish[] {
  switch (filter) {
    case DonateFilter.SHOW_ALL:
      return fish;
    case DonateFilter.SHOW_DONATED:
      return fish.filter((fish: Fish) => donatedIDs.indexOf(fish.id) !== -1);
    case DonateFilter.SHOW_NOT_DONATED:
      return fish.filter((fish: Fish) => donatedIDs.indexOf(fish.id) === -1);
    default:
      return fish;
  }
}

function mapStateToProps(state: RootState) {
  return {
    donatedIDs: state.fish.donations,
    selectedIDs: getSelectedFishIDs(
      AllFish,
      state.fish.donations,
      state.fish.timeFilter,
      state.fish.locationFilter,
      state.fish.donateFilter,
    ),
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    toggleDonate: (id: number) => {
      dispatch(toggleDonate('fish', id));
    },
    setDonate: (id: number, isDonated: boolean) => {
      dispatch(setDonate('fish', id, isDonated));
    },
    setTimeFilter: (filter: TimeFilter) => {
      dispatch(setTimeFilter(filter));
    },
    setLocationFilter: (filter: FishLocationFilter) => {
      dispatch(setFishLocationFilter(filter));
    },
    setDonateFilter: (filter: DonateFilter) => {
      dispatch(setDonateFilter(filter));
    },
  };
}

const timeOptions: FilterOption[] = [
  {
    displayName: 'All',
    value: TimeFilter.SHOW_ALL,
  },
  {
    displayName: 'Current Time',
    value: TimeFilter.SHOW_CURRENT_TIME,
  },
  {
    displayName: 'Custom Time',
    value: TimeFilter.SHOW_CUSTOM_TIME,
  },
];

const locationOptions: FilterOption[] = [
  {
    displayName: 'All',
    value: FishLocationFilter.SHOW_ALL,
  },
  {
    displayName: 'Cliff Top',
    value: FishLocationFilter.SHOW_CLIFF_TOP,
  },
  {
    displayName: 'Pier',
    value: FishLocationFilter.SHOW_PIER,
  },
  {
    displayName: 'Pond',
    value: FishLocationFilter.SHOW_POND,
  },
  {
    displayName: 'River',
    value: FishLocationFilter.SHOW_RIVER,
  },
  {
    displayName: 'River Mouth',
    value: FishLocationFilter.SHOW_RIVER_MOUTH,
  },
  {
    displayName: 'Sea',
    value: FishLocationFilter.SHOW_SEA,
  },
];

const donateOptions: FilterOption[] = [
  {
    displayName: 'All',
    value: DonateFilter.SHOW_ALL,
  },
  {
    displayName: 'Yes',
    value: DonateFilter.SHOW_DONATED,
  },
  {
    displayName: 'No',
    value: DonateFilter.SHOW_NOT_DONATED,
  },
];

const FishContainer = (props: FishContainerProps) => {
  return (
    <div className="fish-container">
      <div className="filters">
        <Filter name="time" displayName="Time" options={timeOptions} onUpdate={props.setTimeFilter} />
        <Filter name="location" displayName="Location" options={locationOptions} onUpdate={props.setLocationFilter} />
        <Filter name="donate" displayName="Donated" options={donateOptions} onUpdate={props.setDonateFilter} />
      </div>
      <CritterList critters={AllFish} critterType="fish" selectedIDs={props.selectedIDs} donatedIDs={props.donatedIDs} setDonate={props.setDonate}/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FishContainer)
