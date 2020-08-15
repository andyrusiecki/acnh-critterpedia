import React from 'react';
import { Link } from 'react-router-dom';
import { getFullURL } from '../util';

import './header.scss';

export function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <img
            className="logo"
            src={getFullURL(`/logo192.png`)}
            alt="logo"
          />
          <h1>ACNH Critterpedia</h1>
          <ul>
            <li><Link to="/">ToDo List</Link></li>
            <li><Link to="/bugs">Bugs</Link></li>
            <li><Link to="/fish">Fish</Link></li>
            <li><Link to="/sea-creatures">Sea Creatures</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
