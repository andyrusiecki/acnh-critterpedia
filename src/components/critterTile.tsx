import React from 'react';
import { Critter } from '../types';
import { getFullURL } from '../util';

import './critterTile.scss';

interface CritterTileProps {
  critter: Critter;
  active: boolean;
  donated: boolean;
  setDonate: (id: number, isDonated: boolean) => void;
}

export class CritterTile extends React.Component<CritterTileProps> {
  render() {
    return (
      <div className={`critter-item ${this.props.active ? '' : 'inactive'}`}>
        <div className={`donate-status ${this.props.donated ? 'donated' : ''}`} onClick={() => { this.props.setDonate(this.props.critter.id, !this.props.donated); }}></div>
        <img src={getFullURL(`/images/thumb/${this.props.critter.type}/${this.props.critter.id}.png`)} alt={this.props.critter.name} />
      </div>
    );
  }
}
