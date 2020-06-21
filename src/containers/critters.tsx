import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { setTimeFilter, setLocationFilter, setDonateFilter, TimeFilter, FishLocationFilter, DonateFilter, toggleDonate, setDonate, BugLocationFilter } from '../actions';
import { Fish, FishLocation, BugLocation, AllFish, AllBugs, RootState, CollectionType, Critter, isAvailableAt, Bug, CollectionState } from '../shared';
import { Filter, FilterOption } from '../components/filter';
import { CritterList } from '../components/critterList';

interface CritterContainerProps {
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
  setLocationFilter: (filter: BugLocationFilter | FishLocationFilter) => void;
  setDonateFilter: (filter: DonateFilter) => void;
}

function getCollectionState(collectionType: CollectionType, rootState: RootState): CollectionState {
  return collectionType === "bugs" ? rootState.bugs : rootState.fish;
}

function getSelectedCritterIDs(collectionType: CollectionType, critters: Critter[], state: RootState): number[] {
  const collectionState = getCollectionState(collectionType, state);

  let filteredCritters = critters;
  filteredCritters = filterCrittersByTime(filteredCritters, state.time.hour, state.time.month, collectionState.timeFilter);
  filteredCritters = filterCrittersByLocation(filteredCritters, collectionType, collectionState.locationFilter);
  filteredCritters = filterCrittersByDonate(filteredCritters, collectionState.donations, collectionState.donateFilter);

  return filteredCritters.map(critter => critter.id);
}

function filterCrittersByTime(critters: Critter[], currentHour: number, currentMonth: number, filter: TimeFilter): Critter[] {
  switch (filter) {
    case TimeFilter.SHOW_ALL:
      return critters;
    case TimeFilter.SHOW_CURRENT_TIME:
      return critters.filter((critter: Critter) => {
        return isAvailableAt(critter, currentHour, currentMonth);
      });
    case TimeFilter.SHOW_CURRENT_MONTH:
      return critters.filter((critter: Critter) => {
        return isAvailableAt(critter, undefined, currentMonth);
      });
    default:
      return critters;
  }
}

function filterCrittersByLocation(critters: Critter[], collectionType: CollectionType, filter: BugLocationFilter | FishLocationFilter): Critter[] {
  if (collectionType === "bugs") {
    switch (filter) {
      case BugLocationFilter.SHOW_ALL:
        return critters;
      case BugLocationFilter.SHOW_BEACH:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.Beach);
      case BugLocationFilter.SHOW_BEACH_ROCKS:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.BeachRocks);
      case BugLocationFilter.SHOW_BUILDING_LIGHTS:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.BuildingLights);
      case BugLocationFilter.SHOW_FLOWERS:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.Flowers);
      case BugLocationFilter.SHOW_FLYING:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.Flying);
      case BugLocationFilter.SHOW_FLYING_FLOWERS:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.FlyingFlowers);
      case BugLocationFilter.SHOW_GROUND:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.Ground);
      case BugLocationFilter.SHOW_PALM_TREES:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.PalmTrees);
      case BugLocationFilter.SHOW_ROCKS:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.Rocks);
      case BugLocationFilter.SHOW_ROTTEN_TURNIPS:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.RottenTurnips);
      case BugLocationFilter.SHOW_SHAKING_TREES:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.ShakingTrees);
      case BugLocationFilter.SHOW_SNOWBALL:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.Snowball);
      case BugLocationFilter.SHOW_TRASH:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.Trash);
      case BugLocationFilter.SHOW_TREES:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.Trees);
      case BugLocationFilter.SHOW_TREE_STUMPS:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.TreeStumps);
      case BugLocationFilter.SHOW_UNDERGROUND:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.Underground);
      case BugLocationFilter.SHOW_UNDER_ROCKS:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.UnderRocks);
      case BugLocationFilter.SHOW_UNDER_TREES:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.UnderTrees);
      case BugLocationFilter.SHOW_VILLAGERS:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.Villagers);
      case BugLocationFilter.SHOW_WATER_SURFACE:
        return critters.filter((critter: Critter) => (critter as Bug).location === BugLocation.WaterSurface);
      default:
        return critters;
    }
  }

  switch (filter) {
    case FishLocationFilter.SHOW_ALL:
      return critters;
    case FishLocationFilter.SHOW_CLIFF_TOP:
      return critters.filter((critter: Critter) => (critter as Fish).location === FishLocation.CliffTop);
    case FishLocationFilter.SHOW_PIER:
      return critters.filter((critter: Critter) => (critter as Fish).location === FishLocation.Pier);
    case FishLocationFilter.SHOW_POND:
      return critters.filter((critter: Critter) => (critter as Fish).location === FishLocation.Pond);
    case FishLocationFilter.SHOW_RIVER:
      return critters.filter((critter: Critter) => (critter as Fish).location === FishLocation.River);
    case FishLocationFilter.SHOW_RIVER_MOUTH:
      return critters.filter((critter: Critter) => (critter as Fish).location === FishLocation.RiverMouth);
    case FishLocationFilter.SHOW_SEA:
      return critters.filter((critter: Critter) => (critter as Fish).location === FishLocation.Sea);
    default:
      return critters;
  }
}

function filterCrittersByDonate(critters: Critter[], donatedIDs: number[], filter: DonateFilter): Critter[] {
  switch (filter) {
    case DonateFilter.SHOW_ALL:
      return critters;
    case DonateFilter.SHOW_DONATED:
      return critters.filter((critter: Critter) => donatedIDs.indexOf(critter.id) !== -1);
    case DonateFilter.SHOW_NOT_DONATED:
      return critters.filter((critter: Critter) => donatedIDs.indexOf(critter.id) === -1);
    default:
      return critters;
  }
}

function getMapStateToPropsFunc(collectionType: CollectionType) {
  return function(state: RootState) {
    const collectionState = getCollectionState(collectionType, state);

    let defaultTimeFilterOption: FilterOption | undefined;
    let defaultLocationFilterOption: FilterOption | undefined;
    let defaultDonateFilterOption: FilterOption | undefined;

    for (let option of timeOptions) {
      if (option.value === collectionState.timeFilter) {
        defaultTimeFilterOption = option;
        break;
      }
    }

    const locationOptions: FilterOption[] = collectionType === 'bugs' ? bugLocationOptions : fishLocationOptions;
    for (let option of locationOptions) {
      if (option.value === collectionState.locationFilter) {
        defaultLocationFilterOption = option;
        break;
      }
    }

    for (let option of donateOptions) {
      if (option.value === collectionState.donateFilter) {
        defaultDonateFilterOption = option;
        break;
      }
    }

    return {
      donatedIDs: collectionState.donations,
      selectedIDs: getSelectedCritterIDs(
        collectionType,
        collectionType === "bugs" ? AllBugs : AllFish,
        state,
      ),
      filterDefaultOption: {
        time: defaultTimeFilterOption,
        location: defaultLocationFilterOption,
        donate: defaultDonateFilterOption,
      }
    };
  }
}

function getMapDispatchToPropsFunc(collectionType: CollectionType) {
  return function(dispatch: Dispatch<any>) {
    return {
      toggleDonate: (id: number) => {
        dispatch(toggleDonate(collectionType, id));
      },
      setDonate: (id: number, isDonated: boolean) => {
        dispatch(setDonate(collectionType, id, isDonated));
      },
      setTimeFilter: (filter: TimeFilter) => {
        dispatch(setTimeFilter(collectionType, filter));
      },
      setLocationFilter: (filter: BugLocationFilter | FishLocationFilter) => {
        dispatch(setLocationFilter(collectionType, filter));
      },
      setDonateFilter: (filter: DonateFilter) => {
        dispatch(setDonateFilter(collectionType, filter));
      },
    };
  }
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

// TODO: Continue here
const fishLocationOptions: FilterOption[] = [
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

const bugLocationOptions: FilterOption[] = [
  {
    displayName: 'All',
    value: BugLocationFilter.SHOW_ALL,
  },
  {
    displayName: 'Beach',
    value: BugLocationFilter.SHOW_BEACH,
  },
  {
    displayName: 'Beach Rocks',
    value: BugLocationFilter.SHOW_BEACH_ROCKS,
  },
  {
    displayName: 'Near Building Lights',
    value: BugLocationFilter.SHOW_BUILDING_LIGHTS,
  },
  {
    displayName: 'Flowers',
    value: BugLocationFilter.SHOW_FLOWERS,
  },
  {
    displayName: 'Flying',
    value: BugLocationFilter.SHOW_FLYING,
  },
  {
    displayName: 'Flying Near Flowers',
    value: BugLocationFilter.SHOW_FLYING_FLOWERS,
  },
  {
    displayName: 'Ground',
    value: BugLocationFilter.SHOW_GROUND,
  },
  {
    displayName: 'On Palm Trees',
    value: BugLocationFilter.SHOW_PALM_TREES,
  },
  {
    displayName: 'On Rocks',
    value: BugLocationFilter.SHOW_ROCKS,
  },
  {
    displayName: 'Near Rotten Turnips',
    value: BugLocationFilter.SHOW_ROTTEN_TURNIPS,
  },
  {
    displayName: 'Shaking Trees',
    value: BugLocationFilter.SHOW_SHAKING_TREES,
  },
  {
    displayName: 'Snowballs',
    value: BugLocationFilter.SHOW_SNOWBALL,
  },
  {
    displayName: 'Near Trash',
    value: BugLocationFilter.SHOW_TRASH,
  },
  {
    displayName: 'On Trees',
    value: BugLocationFilter.SHOW_TREES,
  },
  {
    displayName: 'Tree Stumps',
    value: BugLocationFilter.SHOW_TREE_STUMPS,
  },
  {
    displayName: 'Underground',
    value: BugLocationFilter.SHOW_UNDERGROUND,
  },
  {
    displayName: 'Under Rocks',
    value: BugLocationFilter.SHOW_UNDER_ROCKS,
  },
  {
    displayName: 'Under Trees',
    value: BugLocationFilter.SHOW_UNDER_TREES,
  },
  {
    displayName: 'Villagers',
    value: BugLocationFilter.SHOW_VILLAGERS,
  },
  {
    displayName: 'Water Surface',
    value: BugLocationFilter.SHOW_WATER_SURFACE,
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

const FishContainerComponent = (props: CritterContainerProps) => {
  return (
    <div className="fish-container">
      <div className="filters">
        <Filter name="time" displayName="Time" options={timeOptions} defaultOption={props.filterDefaultOption.time} onUpdate={props.setTimeFilter} />
        <Filter name="location" displayName="Location" options={fishLocationOptions} defaultOption={props.filterDefaultOption.location} onUpdate={props.setLocationFilter} />
        <Filter name="donate" displayName="Donated" options={donateOptions} defaultOption={props.filterDefaultOption.donate} onUpdate={props.setDonateFilter} />
      </div>
      <CritterList critters={AllFish} critterType="fish" selectedIDs={props.selectedIDs} donatedIDs={props.donatedIDs} setDonate={props.setDonate}/>
    </div>
  );
}

const BugsContainerComponent = (props: CritterContainerProps) => {
  return (
    <div className="bugs-container">
      <div className="filters">
        <Filter name="time" displayName="Time" options={timeOptions} defaultOption={props.filterDefaultOption.time} onUpdate={props.setTimeFilter} />
        <Filter name="location" displayName="Location" options={bugLocationOptions} defaultOption={props.filterDefaultOption.location} onUpdate={props.setLocationFilter} />
        <Filter name="donate" displayName="Donated" options={donateOptions} defaultOption={props.filterDefaultOption.donate} onUpdate={props.setDonateFilter} />
      </div>
      <CritterList critters={AllBugs} critterType="bugs" selectedIDs={props.selectedIDs} donatedIDs={props.donatedIDs} setDonate={props.setDonate}/>
    </div>
  );
}

export const FishContainer = connect(getMapStateToPropsFunc('fish'), getMapDispatchToPropsFunc('fish'))(FishContainerComponent);
export const BugsContainer = connect(getMapStateToPropsFunc('bugs'), getMapDispatchToPropsFunc('bugs'))(BugsContainerComponent);
