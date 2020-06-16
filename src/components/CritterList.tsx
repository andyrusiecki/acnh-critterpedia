import React from 'react';
import { Critter } from '../shared/interfaces';
import { getFullURL } from '../shared';

import './CritterList.css';

type T = Critter;

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
          return this.renderCritter(critter);
        })}
      </div>
    );
  }

  renderCritter(critter: T) {
    const show = this.props.selectedIDs.includes(critter.id);
    const donated = this.props.donatedIDs.includes(critter.id);

    return (
      <div className={`critter-item ${show ? '' : 'inactive'}`}>
        <div className="donate-status" onClick={() => { this.props.setDonate(critter.id, !donated); }}>{donated ? '[X]' : '[  ]'}</div>
        <img src={getFullURL(`/images/thumb/${this.props.critterType}/${critter.id}.png`)} alt={critter.name} />
      </div>
    );
  }
}
