import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header} from './Header';
import { Main } from './Main';
import { getBaseURL } from '../shared';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router basename={getBaseURL()}>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
