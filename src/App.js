import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';
import calculate from './Logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: '',
      result: '0',
      operation: null,
    };
  }

  resultDisplay = (result) => {
    if (result.next) {
      return result.next;
    }
    if (result.total !== null) {
      return result.total;
    }
    return '0';
  };

  handleClick = (btnName) => {
    const { next, total, operation } = this.state;

    const obj = {
      total,
      next,
      operation,
    };
    const result = calculate(obj, btnName);
    this.setState({
      result: this.resultDisplay(result),
      next: result.next,
      total: result.total,
      operation: result.operation,
    });
    console.log(result);
  };

  render() {
    const { total, next, result } = this.state;
    return (
      <Container>
        <Calculator
          handleClick={(btnName) => this.handleClick(btnName)}
          total={total}
          next={next}
          result={result}
        />
      </Container>
    );
  }
}

export default App;
