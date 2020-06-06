import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './FishFilter.css';

interface FishFilterState {
  monthFilter?: number;
  hourFilter?: number;
  usingCurrentTime: boolean;
}

interface FishFilterProp {
  onUpdate?: (state: FishFilterState) => void;
}

export class FishFilter extends React.Component<FishFilterProp, FishFilterState> {
  state: FishFilterState = {
    usingCurrentTime: true,
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

        <Dropdown id="location-filter">
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

  private emitFilterUpdate(state: FishFilterState) {
    if (this.props.onUpdate !== undefined) {
      this.props.onUpdate(state);
    }
  }
  private updateTimeFilter(eventKey: any, event: Object) {
    console.log("updating time filter")
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
}
