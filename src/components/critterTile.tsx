import React from 'react';
import { Critter } from '../shared/interfaces';
import { getFullURL, CollectionType } from '../shared';

import './critterTile.scss';

interface CritterTileProps<T extends Critter> {
  critter: T;
  critterType: CollectionType;
  active: boolean;
  donated: boolean;
  setDonate: (id: number, isDonated: boolean) => void;
}

export class CritterTile<T extends Critter> extends React.Component<CritterTileProps<T>> {
  render() {
    return (
      <div className={`critter-item ${this.props.active ? '' : 'inactive'}`}>
        <div className={`donate-status ${this.props.donated ? 'donated' : ''}`} onClick={() => { this.props.setDonate(this.props.critter.id, !this.props.donated); }}></div>
        <img src={getFullURL(`/images/thumb/${this.props.critterType}/${this.props.critter.id}.png`)} alt={this.props.critter.name} />
      </div>
    );
  }
}
