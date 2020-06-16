import React from 'react';
import { Critter } from '../shared/interfaces';
import { CritterTile } from './critterTile';

import './critterList.scss';

interface CritterListProps<T extends Critter> {
  critters: T[];
  critterType: 'fish' | 'bug';
  selectedIDs: number[];
  donatedIDs: number[];
  setDonate: (id: number, isDonated: boolean) => void;
}

export class CritterList<T extends Critter> extends React.Component<CritterListProps<T>> {
  render() {
    return (
      <div className={`critter-list ${this.props.critterType}`}>
        {this.props.critters.map((critter: T) => {
          const show = this.props.selectedIDs.includes(critter.id);
          const donated = this.props.donatedIDs.includes(critter.id);

          return (
            <CritterTile<T> critter={critter} critterType={this.props.critterType} active={show} donated={donated} setDonate={this.props.setDonate} />
          );
        })}
      </div>
    );
  }
}
