import React from 'react';
import { Fish } from '../shared/interfaces';
import { getFullURL } from '../shared';

interface FishListProps {
  items: Fish[];
  shouldDisplayItem?: (fish: Fish) => boolean;
}

export class FishListComponent extends React.Component<FishListProps> {
  readonly MAX_ROWS = 5;

  render() {
    return (
      <div className="fish-view">
        {this.props.items.map(fish => {
          return this.renderFish(fish);
        })}
      </div>
    );
  }

  renderFish(fish: Fish) {
    const show = this.props.shouldDisplayItem ? this.props.shouldDisplayItem(fish) : true;
    return (
      <div className="fish" hidden={!show}>
        <span>{fish.name}</span>
        <img src={getFullURL(`/images/thumb/fish/${fish.id}.png`)} alt={fish.name} />
      </div>
    );
  }
}
