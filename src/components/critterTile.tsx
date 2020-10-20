import React from 'react';
import { Link } from 'react-router-dom';
import { Critter } from '../types';
import { getFullURL } from '../util';

import './critterTile.scss';

interface CritterTileProps {
  critter: Critter;
  active: boolean;
  donated: boolean;
  setDonate: (id: number, isDonated: boolean) => void;
}

/**
 * Component to render an individual CritterTile
 *
 * @export
 * @class CritterTile
 * @extends {React.Component<CritterTileProps>}
 */
export class CritterTile extends React.Component<CritterTileProps> {
  render() {
    return (
      <div className={`critter-item ${this.props.active ? '' : 'inactive'}`}>
        <div className={`donate-status ${this.props.donated ? 'donated' : ''}`} onClick={() => { this.props.setDonate(this.props.critter.id, !this.props.donated); }}></div>
        <Link to={this.getViewPath()}>
          <img src={getFullURL(`/images/thumb/${this.props.critter.type}/${this.props.critter.id}.png`)} alt={this.props.critter.name} />
        </Link>
      </div>
    );
  }

  getViewPath(): string {
    return `/${this.props.critter.type}/${this.props.critter.id}`
  }
}
