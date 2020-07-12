import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header} from './header';
import { Main } from './main';
import { getBaseURL } from '../util';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';


function App() {
  return (
    <Router basename={getBaseURL()}>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
