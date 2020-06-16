import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './home';
import FishContainer from '../containers/fish';

import './main.scss';

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/fish">
          <section className="section-fish">
            <div className="container">
              <FishContainer />
            </div>
          </section>
        </Route>
        <Route exact path="/">
          <section className="section-home">
            <div className="container">
              <Home />
            </div>
          </section>
        </Route>
      </Switch>
    </main>
  );
}
