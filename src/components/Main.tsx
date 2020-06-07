import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { FishViewComponent } from './FishView';

import './Main.css';

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/fish" component={FishViewComponent} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
}
