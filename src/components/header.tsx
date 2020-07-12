import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

export function Header() {
  return (
    <header>
      <div className="container">
        <nav>
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
