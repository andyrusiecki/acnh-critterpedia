import React from 'react';
import { BugLocationDisplay, FishLocationDisplay, FishShadowDisplay, SeaCreatureShadowDisplay, SeaCreatureSpeedDisplay } from '../data';
import { Critter, Fish, Bug, RarityDisplay, SeaCreature } from '../types';
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
        <div className='critter-view-container'>
          <div className="left-col">
            <img className='full-size' src={getFullURL(`/images/full/${this.props.critter.type}/${this.props.critter.id}.png`)} alt={this.props.critter.name} />
            <div className={`donate-status ${this.props.donated ? 'donated' : ''}`} onClick={() => { this.props.setDonate(this.props.critter.id, !this.props.donated); }}></div>
            <div className='critter-availability'>
              hours: {this.props.critter.hourRanges}
              months: {this.props.critter.monthRanges}
            </div>
          </div>
          <div className="right-col">
            <h2 className='critter-name'>{this.props.critter.name}</h2>
            <table>
              <tr>
                <td>Sell Price</td>
                <td>{this.props.critter.sellPrice}</td>
              </tr>
              {this.props.critter.type === 'fish' ? this.renderFish() : ''}
              {this.props.critter.type === 'bugs' ? this.renderBugs() : ''}
              {this.props.critter.type === 'sea-creatures' ? this.renderSeaCreatures() : ''}
            </table>
          </div>
        </div>
      </div>
    );
  }

  renderFish() {
    const fish = this.props.critter as Fish;
    return [
      <tr>
        <td>Rarity</td>
        <td>{RarityDisplay.get(fish.rarity)}</td>
      </tr>,
      <tr>
        <td>Location</td>
        <td>{FishLocationDisplay.get(fish.location)}</td>
      </tr>,
      <tr>
        <td>Shadow</td>
        <td>{FishShadowDisplay.get(fish.shadow)}</td>
      </tr>,
      <tr>
        <td>Weather</td>
        <td>{fish.mustBeRaining ? 'Only When Raining' : 'All'}</td>
      </tr>,
    ];
  }

  renderBugs() {
    const bug = this.props.critter as Bug;
    return [
      <tr>
        <td>Rarity</td>
        <td>{RarityDisplay.get(bug.rarity)}</td>
      </tr>,
      <tr>
        <td>Location</td>
        <td>{BugLocationDisplay.get(bug.location)}</td>
      </tr>,
      <tr>
        <td>Weather</td>
        <td>{bug.mustBeRaining ? 'Only When Raining' : (bug.canBeRaining ? 'Any' : 'Not When Raining' )}</td>
      </tr>,
    ];
  }

  renderSeaCreatures() {
    const seaCreature = this.props.critter as SeaCreature;
    return [
      <tr>
        <td>Shadow</td>
        <td>{SeaCreatureShadowDisplay.get(seaCreature.shadow)}</td>
      </tr>,
      <tr>
        <td>Speed</td>
        <td>{SeaCreatureSpeedDisplay.get(seaCreature.speed)}</td>
      </tr>,
    ];
  }
}
