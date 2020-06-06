import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">ACNH Critterpedia</Link></li>
          <li><Link to="/fish">Fish</Link></li>
        </ul>
      </nav>
    </header>
  );
}
