import React, { Component } from 'react';

import { Col, Row, Button } from 'react-bootstrap';

import calculate from '../Logic/calculate';

class Calculator extends Component {
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
  };

  render() {
    const { result } = this.state;

    return (
      <>
        <Row>
          <Col xs={12} className="p-0">
            <div className="bg-secondary text-end text-white pe-3 display">
              {result}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('AC')}
            >
              AC
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('+/-')}
            >
              +/-
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('%')}
            >
              %
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="warning"
              className="w-100"
              onClick={() => this.handleClick('÷')}
            >
              ÷
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('7')}
            >
              7
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('8')}
            >
              8
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('9')}
            >
              9
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="warning"
              className="w-100"
              onClick={() => this.handleClick('x')}
            >
              x
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('4')}
            >
              4
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('5')}
            >
              5
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('6')}
            >
              6
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="warning"
              className="w-100"
              onClick={() => this.handleClick('-')}
            >
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('1')}
            >
              1
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('2')}
            >
              2
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('3')}
            >
              3
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="warning"
              className="w-100"
              onClick={() => this.handleClick('+')}
            >
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('0')}
            >
              0
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => this.handleClick('.')}
            >
              .
            </Button>
          </Col>

          <Col xs={3} className="p-0">
            <Button
              variant="warning"
              className="w-100"
              onClick={() => this.handleClick('=')}
            >
              =
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default Calculator;
