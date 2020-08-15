import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { setDonate } from '../actions';
import { RootState, CollectionType, Critter, Bug, Fish, SeaCreature } from '../types';
import { AllBugs, AllFish, AllSeaCreatures, UniqueCritterHourRanges } from "../data";
import { isAvailableAt, hourToDisplayText, monthToDisplayText } from "../util";
import { Todo } from '../components/todo';

interface TodoContainerProps {
  currentHourRange: {
    hourRange: number[],
    critters: Critter[],
  },

  nextHourRange: {
    hourRange: number[],
    newCritters: Critter[],
    leavingCritters: Critter[],
  },

  nextMonth: {
    month: number,
    newCritters: Critter[],
    leavingCritters: Critter[],
  }

  setDonate: (collectionType: CollectionType, id: number, isDonated: boolean) => void;
}

/**
 * Returns the current unique hour range that an input hour falls into
 *
 * @param {number} hour
 * @returns {number[]}
 */
function getCurrentHourRange(hour: number): number[] {
  for (let range of UniqueCritterHourRanges) {
    let [start, end] = range;

    // check if this range spills over to the next day
    if (start > end) end += 24;

    if (start <= hour && hour < end) {
      return range;
    }
  }

  // this should never return
  return UniqueCritterHourRanges[0];
}

/**
 * Returns the next unique hour range that this hour falls into
 *
 * @param {number} hour
 * @returns {number[]}
 */
function getNextHourRange(hour: number): number[] {
  for (let i = 0; i < UniqueCritterHourRanges.length; i++) {
    const range = UniqueCritterHourRanges[i];
    let [start, end] = range;

    // check if this range spills over to the next day
    if (start > end) end += 24;

    if (start <= hour && hour < end) {
      return UniqueCritterHourRanges[i + 1 < UniqueCritterHourRanges.length ? i + 1 : 0];
    }
  }

  // this should never return
  return UniqueCritterHourRanges[0];
}

/**
 * Returns a map of hour ranges to critters available in a given month that have not yet been donated
 *
 * @param {Critter[]} startingCritters
 * @param {number[]} donatedIDs
 * @param {number} month
 * @returns {Map<string, number[]>}
 */
function getTodoCrittersPerBuckets(startingCritters: Critter[], donatedIDs: number[], month: number): Map<string, number[]> {
  let todoFish = startingCritters.filter((critter: Critter) => {
    return !donatedIDs.includes(critter.id);
  });

  const map = new Map<string, number[]>();

  for (let [start, end] of UniqueCritterHourRanges) {
    const critterIDs = todoFish.filter((critter: Critter) => {
      return isAvailableAt(critter, start, month);
    }).map((critter: Critter) => critter.id);

    map.set(`${start},${end}`, critterIDs);
  }

  return map;
}

/**
 * Returns an array of critter IDs that are new for the next month and have not yet been donated
 *
 * @param {Critter[]} critters
 * @param {number[]} donatedIDs
 * @param {number} month
 * @returns {number[]}
 */
function getNewCritterIDsForNextMonth(critters: Critter[], donatedIDs: number[], month: number): number[] {
  const nextMonth = month === 12 ? 1 : month + 1;

  return critters.filter((critter: Critter) => {
    return !donatedIDs.includes(critter.id) &&
      !isAvailableAt(critter, undefined, month) &&
      isAvailableAt(critter, undefined, nextMonth);
  }).map((critter: Critter) => critter.id);
}

/**
 * Returns an array of critter IDs that are laeving next month and have not yet been donated
 *
 * @param {Critter[]} critters
 * @param {number[]} donatedIDs
 * @param {number} month
 * @returns {number[]}
 */
function getLeavingCritterIDsForNextMonth(critters: Critter[], donatedIDs: number[], month: number): number[] {
  const nextMonth = month === 12 ? 1 : month + 1;

  return critters.filter((critter: Critter) => {
    return !donatedIDs.includes(critter.id) &&
      isAvailableAt(critter, undefined, month) &&
      !isAvailableAt(critter, undefined, nextMonth);
  }).map((critter: Critter) => critter.id);
}

function mapStateToProps(state: RootState) {
  const bugBuckets = getTodoCrittersPerBuckets(AllBugs, state.bugs.donations, state.time.month);
  const fishBuckets = getTodoCrittersPerBuckets(AllFish, state.fish.donations, state.time.month);
  const seaCreatureBuckets = getTodoCrittersPerBuckets(AllSeaCreatures, state.seaCreatures.donations, state.time.month);

  const currentRange = getCurrentHourRange(state.time.hour);
  const nextRange = getNextHourRange(state.time.hour);

  const currentFishIDs = fishBuckets.get(`${currentRange[0]},${currentRange[1]}`) || [];
  const currentBugIDs = bugBuckets.get(`${currentRange[0]},${currentRange[1]}`) || [];
  const currentSeaCreatureIDs = seaCreatureBuckets.get(`${currentRange[0]},${currentRange[1]}`) || [];

  const nextRangeFishIDs = fishBuckets.get(`${nextRange[0]},${nextRange[1]}`) || [];
  const nextRangeBugIDs = bugBuckets.get(`${nextRange[0]},${nextRange[1]}`) || [];
  const nextRangeSeaCreatureIDs = seaCreatureBuckets.get(`${nextRange[0]},${nextRange[1]}`) || [];

  const nextNewFishIDs = nextRangeFishIDs.filter((id: number) => !currentFishIDs.includes(id));
  const nextLeavingFishIDs = currentFishIDs.filter((id: number) => !nextRangeFishIDs.includes(id));

  const nextNewBugIDs = nextRangeBugIDs.filter((id: number) => !currentBugIDs.includes(id));
  const nextLeavingBugIDs = currentBugIDs.filter((id: number) => !nextRangeBugIDs.includes(id));

  const nextNewSeaCreatureIDs = nextRangeSeaCreatureIDs.filter((id: number) => !currentSeaCreatureIDs.includes(id));
  const nextLeavingSeaCreatureIDs = currentSeaCreatureIDs.filter((id: number) => !nextRangeSeaCreatureIDs.includes(id));


  const newFishIDsNextMonth = getNewCritterIDsForNextMonth(AllFish, state.fish.donations, state.time.month);
  const leavingFishIDsNextMonth = getLeavingCritterIDsForNextMonth(AllFish, state.fish.donations, state.time.month);

  const newBugIDsNextMonth = getNewCritterIDsForNextMonth(AllBugs, state.bugs.donations, state.time.month);
  const leavingBugIDsNextMonth = getLeavingCritterIDsForNextMonth(AllBugs, state.bugs.donations, state.time.month);

  const newSeaCreatureIDsNextMonth = getNewCritterIDsForNextMonth(AllSeaCreatures, state.seaCreatures.donations, state.time.month);
  const leavingSeaCreatureIDsNextMonth = getLeavingCritterIDsForNextMonth(AllSeaCreatures, state.seaCreatures.donations, state.time.month);

  const currentCritters: Critter[] = [
    ...(AllFish.filter((fish: Fish) => currentFishIDs.includes(fish.id))),
    ...(AllBugs.filter((bug: Bug) => currentBugIDs.includes(bug.id))),
    ...(AllSeaCreatures.filter((sc: SeaCreature) => currentSeaCreatureIDs.includes(sc.id))),
  ];

  const nextHourNewCritters: Critter[] = [
    ...(AllFish.filter((fish: Fish) => nextNewFishIDs.includes(fish.id))),
    ...(AllBugs.filter((bug: Bug) => nextNewBugIDs.includes(bug.id))),
    ...(AllSeaCreatures.filter((sc: SeaCreature) => nextNewSeaCreatureIDs.includes(sc.id))),
  ];

  const nextHourLeavingCritters: Critter[] = [
    ...(AllFish.filter((fish: Fish) => nextLeavingFishIDs.includes(fish.id))),
    ...(AllBugs.filter((bug: Bug) => nextLeavingBugIDs.includes(bug.id))),
    ...(AllSeaCreatures.filter((sc: SeaCreature) => nextLeavingSeaCreatureIDs.includes(sc.id))),
  ];

  const nextMonthNewCritters: Critter[] = [
    ...(AllFish.filter((fish: Fish) => newFishIDsNextMonth.includes(fish.id))),
    ...(AllBugs.filter((bug: Bug) => newBugIDsNextMonth.includes(bug.id))),
    ...(AllSeaCreatures.filter((sc: SeaCreature) => newSeaCreatureIDsNextMonth.includes(sc.id))),
  ];

  const nextMonthLeavingCritters: Critter[] = [
    ...(AllFish.filter((fish: Fish) => leavingFishIDsNextMonth.includes(fish.id))),
    ...(AllBugs.filter((bug: Bug) => leavingBugIDsNextMonth.includes(bug.id))),
    ...(AllSeaCreatures.filter((sc: SeaCreature) => leavingSeaCreatureIDsNextMonth.includes(sc.id))),
  ];

  return {
    currentHourRange: {
      hourRange: currentRange,
      critters: currentCritters,
    },

    nextHourRange: {
      hourRange: nextRange,
      newCritters: nextHourNewCritters,
      leavingCritters: nextHourLeavingCritters,
    },

    nextMonth: {
      month: state.time.month === 12 ? 1 : state.time.month + 1,
      newCritters: nextMonthNewCritters,
      leavingCritters: nextMonthLeavingCritters,
    },
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    setDonate: (collectionType: CollectionType, id: number, isDonated: boolean) => {
      dispatch(setDonate(collectionType, id, isDonated));
    },
  };
}

const TodoContainer = (props: TodoContainerProps) => {
  return (
    <div className="todo-container">
      <Todo title="Available Now" critters={props.currentHourRange.critters} setDonate={props.setDonate} />
      <Todo title={`Available at ${hourToDisplayText(props.nextHourRange.hourRange[0])}`} critters={props.nextHourRange.newCritters} setDonate={props.setDonate} />
      <Todo title={`Leaving at ${hourToDisplayText(props.nextHourRange.hourRange[0])}`} critters={props.nextHourRange.leavingCritters} setDonate={props.setDonate} />
      <Todo title={`Available in ${monthToDisplayText(props.nextMonth.month)}`} critters={props.nextMonth.newCritters} setDonate={props.setDonate} />
      <Todo title={`Leaving in ${monthToDisplayText(props.nextMonth.month)}`} critters={props.nextMonth.leavingCritters} setDonate={props.setDonate} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
