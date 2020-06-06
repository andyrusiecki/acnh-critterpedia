import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { FishView } from './FishView';

import './Main.css';

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/fish" component={FishView} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
}
