import React from 'react';
import { Fish } from '../shared/interfaces';
import { getFullURL } from '../shared';

import './FishList.css';

interface FishListProps {
  items: Fish[];
  shouldDisplayItem?: (fish: Fish) => boolean;
}

export class FishListComponent extends React.Component<FishListProps> {
  readonly MAX_ROWS = 5;

  render() {
    return (
      <div className="fish-list">
        {this.props.items.map(fish => {
          return this.renderFish(fish);
        })}
      </div>
    );
  }

  renderFish(fish: Fish) {
    const show = this.props.shouldDisplayItem ? this.props.shouldDisplayItem(fish) : true;
    return (
      <div className={`fish ${show ? '' : 'inactive'}`}>
        <img src={getFullURL(`/images/thumb/fish/${fish.id}.png`)} alt={fish.name} />
      </div>
    );
  }
}
