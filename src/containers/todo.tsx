import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { setDonate } from '../actions';
import { AllFish, RootState, CollectionType, isAvailableAt, UniqueCritterHourRanges, hourToDisplayText, monthToDisplayText, Critter, AllBugs, Bug, Fish } from '../shared';
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

function getCurrentHourRange(hour: number): number[] {
  for (let range of UniqueCritterHourRanges) {
    let [start, end] = range;

    // check if this range spills over to the next day
    if (start > end) end += 24;

    if (start <= hour && hour <= end) {
      return range;
    }
  }

  // this should never return
  return UniqueCritterHourRanges[0];
}

function getNextHourRange(hour: number): number[] {
  for (let i = 0; i < UniqueCritterHourRanges.length; i++) {
    const range = UniqueCritterHourRanges[i];
    let [start, end] = range;

    // check if this range spills over to the next day
    if (start > end) end += 24;

    if (start <= hour && hour <= end) {
      return UniqueCritterHourRanges[i + 1 < UniqueCritterHourRanges.length ? i + 1 : 0];
    }
  }

  // this should never return
  return UniqueCritterHourRanges[0];
}

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

function getNewCritterIDsForNextMonth(critters: Critter[], donatedIDs: number[], month: number): number[] {
  const nextMonth = month === 12 ? 1 : month + 1;

  return critters.filter((critter: Critter) => {
    return !donatedIDs.includes(critter.id) &&
      !isAvailableAt(critter, undefined, month) &&
      isAvailableAt(critter, undefined, nextMonth);
  }).map((critter: Critter) => critter.id);
}

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

  const currentRange = getCurrentHourRange(state.time.hour);
  const nextRange = getNextHourRange(state.time.hour);

  const currentFishIDs = fishBuckets.get(`${currentRange[0]},${currentRange[1]}`) || [];
  const currentBugIDs = bugBuckets.get(`${currentRange[0]},${currentRange[1]}`) || [];

  const nextRangeFishIDs = fishBuckets.get(`${nextRange[0]},${nextRange[1]}`) || [];
  const nextRangeBugIDs = bugBuckets.get(`${nextRange[0]},${nextRange[1]}`) || [];

  const nextNewFishIDs = nextRangeFishIDs.filter((id: number) => !currentFishIDs.includes(id));
  const nextLeavingFishIDs = currentFishIDs.filter((id: number) => !nextRangeFishIDs.includes(id));

  const nextNewBugIDs = nextRangeBugIDs.filter((id: number) => !currentBugIDs.includes(id));
  const nextLeavingBugIDs = currentBugIDs.filter((id: number) => !nextRangeBugIDs.includes(id));


  const newFishIDsNextMonth = getNewCritterIDsForNextMonth(AllFish, state.fish.donations, state.time.month);
  const leavingFishIDsNextMonth = getLeavingCritterIDsForNextMonth(AllFish, state.fish.donations, state.time.month);

  const newBugIDsNextMonth = getNewCritterIDsForNextMonth(AllBugs, state.bugs.donations, state.time.month);
  const leavingBugIDsNextMonth = getLeavingCritterIDsForNextMonth(AllBugs, state.bugs.donations, state.time.month);

  const currentCritters: Critter[] = [
    ...(AllFish.filter((fish: Fish) => currentFishIDs.includes(fish.id))),
    ...(AllBugs.filter((bug: Bug) => currentBugIDs.includes(bug.id))),
  ];

  const nextHourNewCritters: Critter[] = [
    ...(AllFish.filter((fish: Fish) => nextNewFishIDs.includes(fish.id))),
    ...(AllBugs.filter((bug: Bug) => nextNewBugIDs.includes(bug.id))),
  ];

  const nextHourLeavingCritters: Critter[] = [
    ...(AllFish.filter((fish: Fish) => nextLeavingFishIDs.includes(fish.id))),
    ...(AllBugs.filter((bug: Bug) => nextLeavingBugIDs.includes(bug.id))),
  ];

  const nextMonthNewCritters: Critter[] = [
    ...(AllFish.filter((fish: Fish) => newFishIDsNextMonth.includes(fish.id))),
    ...(AllBugs.filter((bug: Bug) => newBugIDsNextMonth.includes(bug.id))),
  ];

  const nextMonthLeavingCritters: Critter[] = [
    ...(AllFish.filter((fish: Fish) => leavingFishIDsNextMonth.includes(fish.id))),
    ...(AllBugs.filter((bug: Bug) => leavingBugIDsNextMonth.includes(bug.id))),
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
