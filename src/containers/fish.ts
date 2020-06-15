import { connect } from 'react-redux';
import { setTimeFilter, setFishLocationFilter, setDonateFilter, TimeFilter, FishLocationFilter, DonateFilter } from '../actions';
import { Fish, FishLocation } from '../shared';

interface FishContainerState {
  allFish: Fish[];
  donated: number[];
  timeFilter: TimeFilter;
  locationFilter: FishLocationFilter;
  donateFilter: DonateFilter;
}

interface FishContainerProps {
  fish: Fish[];
  selectedFishIDs: number[];
  donatedFishIDs: number[];
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

function mapStateToProps(state: FishContainerState) {
  return {
    fish: state.allFish,
    donatedFishIDs: state.donated,
    selectedFishIDs: getSelectedFishIDs(
      state.allFish,
      state.donated,
      state.timeFilter,
      state.locationFilter,
      state.donateFilter,
    ),
  };
}

// TODO: Start here
function mapDispatchToProps(dispatch) {
  return {
    fish: state.allFish,
    donatedFishIDs: state.donated,
    selectedFishIDs: getSelectedFishIDs(
      state.allFish,
      state.donated,
      state.timeFilter,
      state.locationFilter,
      state.donateFilter,
    ),
  };
}

const FishContainer = (props: FishContainerProps) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? 'ON' : 'OFF'}
    </button>
  </div>
)

export default connector(MyComponent)
