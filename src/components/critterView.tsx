import React from 'react';
import { Critter } from '../shared/interfaces';
import { getFullURL } from '../shared';

//import './critterView.scss';

interface CritterViewProps {
  critter: Critter;
  donated: boolean;
  setDonate: (id: number, isDonated: boolean) => void;
}

export class CritterView extends React.Component<CritterViewProps> {
  render() {
    return (
      <div className='critter-view'>
        <div className='critter-name'>{this.props.critter.name}</div>
        <img src={getFullURL(`/images/full/${this.props.critter.type}/${this.props.critter.id}.png`)} alt={this.props.critter.name} />

        <div className={`donate-status ${this.props.donated ? 'donated' : ''}`} onClick={() => { this.props.setDonate(this.props.critter.id, !this.props.donated); }}></div>
        <div className='critter-rarity'>{this.props.critter.rarity}</div>
        <div className='critter-sellprice'>{this.props.critter.sellPrice}</div>

        <div className='critter-availability'>
          hours: {this.props.critter.hourRanges}
          months: {this.props.critter.monthRanges}
        </div>
      </div>
    );
  }
}