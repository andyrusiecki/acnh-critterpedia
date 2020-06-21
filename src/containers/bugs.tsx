import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { setTimeFilter, setBugLocationFilter, setDonateFilter, TimeFilter, BugLocationFilter, DonateFilter, toggleDonate, setDonate } from '../actions';
import { Bug, BugLocation, AllBugs, RootState } from '../shared';
import { Filter, FilterOption } from '../components/filter';
import { CritterList } from '../components/critterList';

interface BugContainerProps {
  selectedIDs: number[];
  donatedIDs: number[];

  filterDefaultOption: {
    time?: FilterOption,
    location?: FilterOption,
    donate?: FilterOption,
  },

  toggleDonate: (id: number) => void;
  setDonate: (id: number, isDonated: boolean) => void;
  setTimeFilter: (filter: TimeFilter) => void;
  setLocationFilter: (filter: BugLocationFilter) => void;
  setDonateFilter: (filter: DonateFilter) => void;
}

function getSelectedBugIDs(bugs: Bug[], state: RootState): number[] {
  let filteredBugs = bugs;
  filteredBugs = filterBugsByTime(filteredBugs, state.time.hour, state.time.month, state.bugs.timeFilter);
  filteredBugs = filterBugsByLocation(filteredBugs, state.bugs.locationFilter);
  filteredBugs = filterBugsByDonate(filteredBugs, state.bugs.donations, state.bugs.donateFilter);

  return filteredBugs.map(bug => bug.id);
}

function filterBugsByTime(bugs: Bug[], currentHour: number, currentMonth: number, filter: TimeFilter): Bug[] {
  switch (filter) {
    case TimeFilter.SHOW_ALL:
      return bugs;
    case TimeFilter.SHOW_CURRENT_TIME:
      return bugs.filter((bug: Bug) => {
        return isAvailableAt(bug, currentHour, currentMonth);
      });
    case TimeFilter.SHOW_CURRENT_MONTH:
      return bugs.filter((bug: Bug) => {
        return isAvailableAt(bug, undefined, currentMonth);
      });
    default:
      return bugs;
  }
}

function isAvailableAt(bug: Bug, hour?: number, month?: number): boolean {
  let isAvail = true;

  if (hour !== undefined) {
    isAvail = isAvail && isInTimeRanges(hour, bug.hourRanges)
  }

  if (month !== undefined) {
    isAvail = isAvail && isInTimeRanges(month, bug.monthRanges)
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

function filterBugsByLocation(bugs: Bug[], filter: BugLocationFilter): Bug[] {
  switch (filter) {
    case BugLocationFilter.SHOW_ALL:
      return bugs;
    case BugLocationFilter.SHOW_BEACH:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.Beach);
    case BugLocationFilter.SHOW_BEACH_ROCKS:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.BeachRocks);
    case BugLocationFilter.SHOW_BUILDING_LIGHTS:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.BuildingLights);
    case BugLocationFilter.SHOW_FLOWERS:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.Flowers);
    case BugLocationFilter.SHOW_FLYING:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.Flying);
    case BugLocationFilter.SHOW_FLYING_FLOWERS:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.FlyingFlowers);
    case BugLocationFilter.SHOW_GROUND:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.Ground);
    case BugLocationFilter.SHOW_PALM_TREES:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.PalmTrees);
    case BugLocationFilter.SHOW_ROCKS:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.Rocks);
    case BugLocationFilter.SHOW_ROTTEN_TURNIPS:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.RottenTurnips);
    case BugLocationFilter.SHOW_SHAKING_TREES:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.ShakingTrees);
    case BugLocationFilter.SHOW_SNOWBALL:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.Snowball);
    case BugLocationFilter.SHOW_TRASH:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.Trash);
    case BugLocationFilter.SHOW_TREES:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.Trees);
    case BugLocationFilter.SHOW_TREE_STUMPS:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.TreeStumps);
    case BugLocationFilter.SHOW_UNDERGROUND:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.Underground);
    case BugLocationFilter.SHOW_UNDER_ROCKS:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.UnderRocks);
    case BugLocationFilter.SHOW_UNDER_TREES:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.UnderTrees);
    case BugLocationFilter.SHOW_VILLAGERS:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.Villagers);
    case BugLocationFilter.SHOW_WATER_SURFACE:
      return bugs.filter((bug: Bug) => bug.location === BugLocation.WaterSurface);
    default:
      return bugs;
  }
}

function filterBugsByDonate(bugs: Bug[], donatedIDs: number[], filter: DonateFilter): Bug[] {
  switch (filter) {
    case DonateFilter.SHOW_ALL:
      return bugs;
    case DonateFilter.SHOW_DONATED:
      return bugs.filter((bug: Bug) => donatedIDs.indexOf(bug.id) !== -1);
    case DonateFilter.SHOW_NOT_DONATED:
      return bugs.filter((bug: Bug) => donatedIDs.indexOf(bug.id) === -1);
    default:
      return bugs;
  }
}

function mapStateToProps(state: RootState) {
  let defaultTimeFilterOption: FilterOption | undefined;
  let defaultLocationFilterOption: FilterOption | undefined;
  let defaultDonateFilterOption: FilterOption | undefined;

  for (let option of timeOptions) {
    if (option.value === state.bugs.timeFilter) {
      defaultTimeFilterOption = option;
      break;
    }
  }

  for (let option of locationOptions) {
    if (option.value === state.bugs.locationFilter) {
      defaultLocationFilterOption = option;
      break;
    }
  }

  for (let option of donateOptions) {
    if (option.value === state.bugs.donateFilter) {
      defaultDonateFilterOption = option;
      break;
    }
  }

  return {
    donatedIDs: state.bugs.donations,
    selectedIDs: getSelectedBugIDs(
      AllBugs,
      state,
    ),
    filterDefaultOption: {
      time: defaultTimeFilterOption,
      location: defaultLocationFilterOption,
      donate: defaultDonateFilterOption,
    }
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    toggleDonate: (id: number) => {
      dispatch(toggleDonate('bug', id));
    },
    setDonate: (id: number, isDonated: boolean) => {
      dispatch(setDonate('bug', id, isDonated));
    },
    setTimeFilter: (filter: TimeFilter) => {
      dispatch(setTimeFilter(filter));
    },
    setLocationFilter: (filter: BugLocationFilter) => {
      dispatch(setBugLocationFilter(filter));
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
    displayName: 'Current Month',
    value: TimeFilter.SHOW_CURRENT_MONTH,
  },
];

const locationOptions: FilterOption[] = [
  {
    displayName: 'All',
    value: BugLocationFilter.SHOW_ALL,
  },
  {
    displayName: 'Cliff Top',
    value: BugLocationFilter.SHOW_CLIFF_TOP,
  },
  {
    displayName: 'Pier',
    value: BugLocationFilter.SHOW_PIER,
  },
  {
    displayName: 'Pond',
    value: BugLocationFilter.SHOW_POND,
  },
  {
    displayName: 'River',
    value: BugLocationFilter.SHOW_RIVER,
  },
  {
    displayName: 'River Mouth',
    value: BugLocationFilter.SHOW_RIVER_MOUTH,
  },
  {
    displayName: 'Sea',
    value: BugLocationFilter.SHOW_SEA,
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

const BugContainer = (props: BugContainerProps) => {
  return (
    <div className="bug-container">
      <div className="filters">
        <Filter name="time" displayName="Time" options={timeOptions} defaultOption={props.filterDefaultOption.time} onUpdate={props.setTimeFilter} />
        <Filter name="location" displayName="Location" options={locationOptions} defaultOption={props.filterDefaultOption.location} onUpdate={props.setLocationFilter} />
        <Filter name="donate" displayName="Donated" options={donateOptions} defaultOption={props.filterDefaultOption.donate} onUpdate={props.setDonateFilter} />
      </div>
      <CritterList critters={AllBug} critterType="bug" selectedIDs={props.selectedIDs} donatedIDs={props.donatedIDs} setDonate={props.setDonate}/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BugContainer)
