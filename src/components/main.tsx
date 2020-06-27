import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BugsContainer, FishContainer } from '../containers/critters';
import { BugsViewContainer, FishViewContainer } from '../containers/critterView';
import TodoContainer from '../containers/todo';
import { ErrorComponent } from './error';

import './main.scss';

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/bugs/:id">
          <section className="section-bugs">
            <div className="container">
              <BugsViewContainer />
            </div>
          </section>
        </Route>
        <Route exact path="/bugs">
          <section className="section-bugs">
            <div className="container">
              <BugsContainer />
            </div>
          </section>
        </Route>
        <Route exact path="/fish/:id">
          <section className="section-fish">
            <div className="container">
              <FishViewContainer />
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
        <Route path="*">
          <section className="section-404">
            <div className="container">
              <ErrorComponent message="404" />
            </div>
          </section>
        </Route>
      </Switch>
    </main>
  );
}
