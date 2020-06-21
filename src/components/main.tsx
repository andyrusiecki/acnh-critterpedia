import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FishContainer from '../containers/critters';
import TodoContainer from '../containers/todo';

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
          <section className="section-todo">
            <div className="container">
              <TodoContainer />
            </div>
          </section>
        </Route>
      </Switch>
    </main>
  );
}
