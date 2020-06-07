import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './FishFilter.css';
import { Fish, FishLocation } from '../shared';

interface FishFilterState {
  customMonth: number | null;
  customHour: number | null;
  usingCurrentTime: boolean;

  locations: FishLocation[];
}

export type Filter = (fish: Fish) => boolean;

interface FishFilterProp {
  onUpdate?: (filters: Filter[]) => void;
}

export class FishFilter extends React.Component<FishFilterProp, FishFilterState> {
  state: FishFilterState = {
    customMonth: null,
    customHour: null,
    usingCurrentTime: true,

    locations: [],
  };

  render() {
    return (
      <div className="filter">
        <Dropdown id="time-filter" onSelect={this.updateTimeFilter.bind(this)}>
          <Dropdown.Toggle id="dropdown-time">
            Time
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="current-time">Current Time</Dropdown.Item>
            <Dropdown.Item eventKey="custom-time">Custom Time</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown id="location-filter" onSelect={this.updateLocationFilter.bind(this)}>
          <Dropdown.Toggle id="dropdown-location">
            Location
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="river">River</Dropdown.Item>
            <Dropdown.Item eventKey="pond">Pond</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }

  // should be in reaction to state change
  private emitFilterUpdate(state: FishFilterState) {
    if (this.props.onUpdate !== undefined) {
      this.props.onUpdate(this.getFilters());
    }
  }

  private updateTimeFilter(eventKey: any, event: Object) {
    const { state } = this;

    if (!state.usingCurrentTime && eventKey === 'current-time') {
      state.usingCurrentTime = true;
      this.setState(state);
      this.emitFilterUpdate(state);
    } else if (state.usingCurrentTime && eventKey === 'custom-time') {
      state.usingCurrentTime = false;
      this.setState(state);
      this.emitFilterUpdate(state);
    }
  }

  private updateLocationFilter(eventKey: string, event: Object) {
    const { state } = this;

    let location: FishLocation | null = null;

    switch (eventKey) {
      case "river":
        location = FishLocation.River;
        break;
      case "pond":
        location = FishLocation.Pond;
        break;
    }

    if (location && !state.locations.includes(location)) {
      state.locations = [
        location
      ];

      this.setState(state);
      this.emitFilterUpdate(state);
    }
  }

  private getFilters(): Filter[] {
    const { state } = this;
    const filters: Filter[] = [];

    if (state.usingCurrentTime) {
      const date = new Date();
      state.customHour = date.getHours();
      state.customMonth = date.getMonth() + 1;
    } else {
      state.customHour = 7;
      state.customMonth = 12;
    }

    if (state.customHour !== null) {
      filters.push((fish: Fish) => {
        for (let [start, end] of fish.hourRanges) {
          if (state.customHour! >= start && state.customHour! <= end) {
            return true;
          }
        }

        return false;
      });
    }

    if (state.customMonth !== null) {
      filters.push((fish: Fish) => {
        for (let [start, end] of fish.monthRanges) {
          if (state.customMonth! >= start && state.customMonth! <= end) {
            return true;
          }
        }

        return false;
      });
    }

    if (state.locations.length) {
      filters.push((fish: Fish) => {
        return state.locations.includes(fish.location);
      });
    }
    return filters;
  }
}
