import React from 'react';
import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';

const App = () => (
  <Container className="d-flex justify-content-center pt-4">
    <div className="calc-container">
      <Calculator />
    </div>
  </Container>
);

export default App;
