import React from 'react';
import { Fish } from '../shared/interfaces';
import { getFullURL } from '../shared';
import { FishDataService } from '../services';

import './FishList.css';

interface FishListProps {
  shouldDisplayItem?: (fish: Fish) => boolean;
}

interface FishListState {
  allFish: Fish[];
}

export class FishListComponent extends React.Component<FishListProps, FishListState> {
  readonly MAX_ROWS = 5;

  private fishDataService = new FishDataService();

  constructor(props: FishListProps) {
    super(props);

    this.state = {
      allFish: this.fishDataService.getAll(),
    }
  }
  render() {
    return (
      <div className="fish-list">
        {this.fishDataService.getAll().map((fish: Fish) => {
          return this.renderFish(fish);
        })}
      </div>
    );
  }

  toggleDonated(id: number) {
    const fish = this.fishDataService.getByID(id);

    if (fish) {
      this.fishDataService.setDonated(id, !fish.donated);
      this.setState({
        allFish: this.fishDataService.getAll(),
      });
    }
  }

  renderFish(fish: Fish) {
    const show = this.props.shouldDisplayItem ? this.props.shouldDisplayItem(fish) : true;
    return (
      <div className={`fish ${show ? '' : 'inactive'}`}>
        <div className="donate-status" onClick={() => { this.toggleDonated(fish.id); }}>{fish.donated ? '[X]' : '[  ]'}</div>
        <img src={getFullURL(`/images/thumb/fish/${fish.id}.png`)} alt={fish.name} />
      </div>
    );
  }
}
