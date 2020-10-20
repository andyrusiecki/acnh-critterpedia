import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
import { getBaseURL } from '../util';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';


function App() {
  return (
    <Router basename={getBaseURL()}>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
