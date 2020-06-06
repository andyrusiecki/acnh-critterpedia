import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Main } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Main />
      </Router>
    </Container>
  );
}

export default App;
