import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="d-flex justify-content-center pt-4">
        <div className="calc-container">
          <Calculator />
        </div>
      </Container>
    );
  }
}

export default App;
