import React from 'react';
import { FishFilter } from './FishFilter';
import { ALL_FISH } from '../shared/constants';
import { Fish } from '../shared/interfaces';

import './FishView.css';

interface FishViewState {
  monthFilter?: number;
  hourFilter?: number;
}

export class FishView extends React.Component {
  readonly MAX_ROWS = 5;

  componentWillMount() {
    const state: FishViewState = {
      // monthFilter: 6,
      // hourFilter: 17,
    };

    this.setState(state)
  }


  render() {
    return (
      <div>
        <FishFilter onUpdate={this.filterUpdate.bind(this)}/>
        <div className="fish-view">
          {ALL_FISH.map(fish => {
            return this.renderFish(fish);
          })}
        </div>
      </div>
    );
  }

  renderFish(fish: Fish) {
    const state: FishViewState = this.state;
    const hidden: boolean = !this.isAvailableAt(fish, state.hourFilter, state.monthFilter);

    return (
      <div className="fish" hidden={hidden}>
        Id: {fish.id}
        Name: {fish.name}
      </div>
    );
  }

  filterUpdate(filter: any) {
    const state: FishViewState = this.state;
    if (filter.usingCurrentTime) {
      const date = new Date();
      state.hourFilter = date.getHours();
      state.monthFilter = date.getMonth();
      this.setState(state);
    } else {
      state.hourFilter = 7;
      state.monthFilter = 12;
      this.setState(state);
    }
  }

  private isAvailableAt(fish: Fish, hour?: number, month?: number): boolean {
    let isAvail = true;

    if (hour !== undefined) {
      isAvail = isAvail && this.isInTimeRanges(hour, fish.hourRanges)
    }

    if (month !== undefined) {
      isAvail = isAvail && this.isInTimeRanges(month, fish.monthRanges)
    }
    return isAvail;
  }

  private isInTimeRanges(time: number, ranges: number[][]): boolean {
    for (let [start, end] of ranges) {
      if (time >= start && time <= end) {
        return true;
      }
    }

    return false;
  }
}
