import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BugsContainer, FishContainer } from '../containers/critters';
import TodoContainer from '../containers/todo';

import './main.scss';

export function Main() {
  return (
    <main>
      <Switch>
      <Route exact path="/bugs">
          <section className="section-bugs">
            <div className="container">
              <BugsContainer />
            </div>
          </section>
        </Route>
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
