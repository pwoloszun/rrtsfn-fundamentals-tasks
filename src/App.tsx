import React from 'react';
import Container from 'react-bootstrap/Container';

import AppRouter from './components/AppRouter';

import './App.css';

function App() {
  return (
    <Container fluid={true}>
      <AppRouter />
    </Container>
  );
}

export default App;
