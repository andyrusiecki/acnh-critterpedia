import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { setDonate } from '../actions';
import { Fish, AllFish, RootState, CollectionType, isAvailableAt, UniqueFishHourRanges, } from '../shared';
import { Todo } from '../components/todo';

interface TodoContainerProps {
  currentHourRange: {
    hourRange: number[],
    fish: Fish[],
  },

  nextHourRange: {
    hourRange: number[],
    fish: Fish[],
  },

  nextMonth: {
    fish: Fish[];
  }

  setDonate: (collectionType: CollectionType, id: number, isDonated: boolean) => void;
}

function getCurrentFishHourRange(hour: number): number[] {
  for (let range of UniqueFishHourRanges) {
    let [start, end] = range;

    // check if this range spills over to the next day
    if (start > end) end += 24;

    if (start <= hour && hour <= end) {
      return range;
    }
  }

  // this should never return
  return UniqueFishHourRanges[0];
}

function getNextFishHourRange(hour: number): number[] {
  for (let i = 0; i < UniqueFishHourRanges.length; i++) {
    const range = UniqueFishHourRanges[i];
    let [start, end] = range;

    // check if this range spills over to the next day
    if (start > end) end += 24;

    if (start <= hour && hour <= end) {
      return UniqueFishHourRanges[i + 1 < UniqueFishHourRanges.length ? i + 1 : 0];
    }
  }

  // this should never return
  return UniqueFishHourRanges[0];
}

function getTodoFishPerBuckets(startingFish: Fish[], donatedIDs: number[], month: number): Map<string, number[]> {
  let todoFish = startingFish.filter((fish: Fish) => {
    return !donatedIDs.includes(fish.id);
  });

  const map = new Map<string, number[]>();

  for (let [start, end] of UniqueFishHourRanges) {
    const fishIDs = todoFish.filter((fish: Fish) => {
      return isAvailableAt(fish, start, month);
    }).map((fish: Fish) => fish.id);

    map.set(`${start},${end}`, fishIDs);
  }

  return map;
}

function getNewFishIDsForNextMonth(fish: Fish[], donatedIDs: number[], month: number): number[] {
  const nextMonth = month === 12 ? 1 : month + 1;

  return fish.filter((fish: Fish) => {
    return !donatedIDs.includes(fish.id) &&
      !isAvailableAt(fish, undefined, month) &&
      isAvailableAt(fish, undefined, nextMonth);
  }).map((fish: Fish) => fish.id);
}

function mapStateToProps(state: RootState) {
  const buckets = getTodoFishPerBuckets(AllFish, state.fish.donations, state.time.month);
  const currentRange = getCurrentFishHourRange(state.time.hour);
  const nextRange = getNextFishHourRange(state.time.hour);

  const currentFishIDs = buckets.get(`${currentRange[0]},${currentRange[1]}`) || [];
  const nextFishIDs = (buckets.get(`${nextRange[0]},${nextRange[1]}`) || [])
    .filter((id: number) => !currentFishIDs.includes(id));
  const newFishIDsNextMonth = getNewFishIDsForNextMonth(AllFish, state.fish.donations, state.time.month) || [];

  return {
    currentHourRange: {
      hourRange: currentRange,
      fish: AllFish.filter((fish: Fish) => currentFishIDs.includes(fish.id)),
    },

    nextHourRange: {
      hourRange: nextRange,
      fish: AllFish.filter((fish: Fish) => nextFishIDs.includes(fish.id)),
    },

    nextMonth: {
      fish: AllFish.filter((fish: Fish) => newFishIDsNextMonth.includes(fish.id)),
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
      <Todo title="Available Now" fish={props.currentHourRange.fish} setDonate={props.setDonate} />
      <Todo title="Available Soon" fish={props.nextHourRange.fish} setDonate={props.setDonate} />
      <Todo title="Available Next Month" fish={props.nextMonth.fish} setDonate={props.setDonate} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
