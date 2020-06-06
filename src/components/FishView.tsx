import React from 'react';
import { Container } from 'react-bootstrap';
import { ALL_FISH } from '../shared/constants';
import { Fish } from '../shared/interfaces';

export class FishView extends React.Component {
  render() {
    return (
      <Container>
        { ALL_FISH.map(this.renderFish) }
      </Container>
    );
  }

  renderFish(fish: Fish) {
    return (
      <div className="fish">
        Id: {fish.id}
        Name: {fish.name}
      </div>
    );
  }
}
