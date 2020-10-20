import React from 'react';
import './timeRange.scss';

export interface TimeRangeProps {
  ranges: number[];
}

abstract class TimeRange extends React.Component<TimeRangeProps> {
  readonly rangeMin: number = 0;
  readonly rangeMax: number = 1;
  readonly rangeDisplay: Map<number, string> = new Map();

  render() {
    return (
      <div className="time-range">
        <div className="time-range-container">
          {this.renderTimeChunks()}
        </div>
      </div>
    );
  }

  private renderTimeChunks() {
    const chunks = [];

    for (let i = this.rangeMin; i <= this.rangeMax; i++) {
      chunks.push((
        <div className="time-chunk">
          <span className={this.props.ranges.includes(i) ? 'active' : ''}></span>
          <div className="label">{this.rangeDisplay.get(i)}</div>
        </div>
      ));
    }

    return chunks;
  }
}

export class HourTimeRange extends TimeRange {
  readonly rangeMin: number = 0;
  readonly rangeMax: number = 24;
  readonly rangeDisplay: Map<number, string> = new Map([
    [0, '12am'],
    [2, '2am'],
    [4, '4am'],
    [6, '6am'],
    [8, '8am'],
    [10, '10am'],
    [12, '12pm'],
    [14, '2pm'],
    [16, '4pm'],
    [18, '6pm'],
    [20, '8pm'],
    [22, '10pm'],
    [24, '12am'],
  ]);
}

export class MonthTimeRange extends TimeRange {
  readonly rangeMin: number = 1;
  readonly rangeMax: number = 12;
  readonly rangeDisplay: Map<number, string> = new Map([
    [1, 'Jan'],
    [2, 'Feb'],
    [3, 'Mar'],
    [4, 'Apr'],
    [5, 'May'],
    [6, 'Jun'],
    [7, 'Jul'],
    [8, 'Aug'],
    [9, 'Sept'],
    [10, 'Oct'],
    [11, 'Nov'],
    [12, 'Dec'],
  ]);
}
