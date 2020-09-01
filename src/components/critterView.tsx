import React from 'react';
import { Critter, Fish, Bug, SeaCreature } from '../types';
import { getFullURL } from '../util';

import './critterView.scss';

interface CritterViewProps {
  critter: Critter;
  donated: boolean;
  setDonate: (id: number, isDonated: boolean) => void;
}

/**
 * Component for a larger, detailed view of a Critter
 *
 * @export
 * @class CritterView
 * @extends {React.Component<CritterViewProps>}
 */
export class CritterView extends React.Component<CritterViewProps> {
  render() {
    return (
      <div className='critter-view'>
        <h2 className='critter-name'>{this.props.critter.name}</h2>
        <div className="left-col">
          <img className='full-size' src={getFullURL(`/images/full/${this.props.critter.type}/${this.props.critter.id}.png`)} alt={this.props.critter.name} />
          <div className={`donate-status ${this.props.donated ? 'donated' : ''}`} onClick={() => { this.props.setDonate(this.props.critter.id, !this.props.donated); }}></div>
        </div>
        <div className="right-col">
          <div className="critter-type">Type: {this.props.critter.type}</div>
          <div className='critter-sellprice'>Sell Price: {this.props.critter.sellPrice}</div>

          <div className='critter-availability'>
            hours: {this.props.critter.hourRanges}
            months: {this.props.critter.monthRanges}
          </div>

          {this.props.critter.type === 'fish' ? this.renderFish() : ''}
          {this.props.critter.type === 'bugs' ? this.renderBugs() : ''}
          {this.props.critter.type === 'sea-creatures' ? this.renderSeaCreatures() : ''}
        </div>
      </div>
    );
  }

  renderFish() {
    const fish = this.props.critter as Fish;
    return (
      <div>
        <div className="critter-rarity">Rarity: {fish.rarity}</div>
        <div className="critter-location">Location: {fish.location}</div>
        <div className="critter-shadow">Shadow: {fish.shadow}</div>
        <div className="critter-raining">Must Be Raining: {fish.mustBeRaining}</div>
      </div>
    );
  }

  renderBugs() {
    const bug = this.props.critter as Bug;
    return (
      <div>
        <div className="critter-rarity">Rarity: {bug.rarity}</div>
        <div className="critter-location">Location: {bug.location}</div>
        <div className="critter-num">Number of Bugs needed: {bug.numBugsNeeded}</div>
        <div className="critter-raining">Can Be Raining: {bug.canBeRaining}</div>
        <div className="critter-raining">Must Be Raining: {bug.mustBeRaining}</div>
      </div>
    );
  }

  renderSeaCreatures() {
    const seaCreature = this.props.critter as SeaCreature;
    return (
      <div>
        <div className="critter-shadow">Shadow: {seaCreature.shadow}</div>
        <div className="critter-speed">Speed: {seaCreature.speed}</div>
      </div>
    );
  }
}
