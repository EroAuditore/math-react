import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button } from 'react-bootstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleClick, result } = this.props;

    return (
      <>
        <h2>Calculator:</h2>
        <Row>
          <Col xs={12} className="p-0">
            <div className="bg-secondary text-end text-white pe-3">
              {result}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('AC')}
            >
              AC
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('+/-')}
            >
              +/-
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('%')}
            >
              %
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="warning"
              className="w-100"
              onClick={() => handleClick('/')}
            >
              /
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('7')}
            >
              7
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('8')}
            >
              8
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('9')}
            >
              9
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="warning"
              className="w-100"
              onClick={() => handleClick('x')}
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
              onClick={() => handleClick('4')}
            >
              4
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('5')}
            >
              5
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('6')}
            >
              6
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="warning"
              className="w-100"
              onClick={() => handleClick('-')}
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
              onClick={() => handleClick('1')}
            >
              1
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('2')}
            >
              2
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('3')}
            >
              3
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="warning"
              className="w-100"
              onClick={() => handleClick('+')}
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
              onClick={() => handleClick('0')}
            >
              0
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => handleClick('.')}
            >
              .
            </Button>
          </Col>

          <Col xs={3} className="p-0">
            <Button
              variant="warning"
              className="w-100"
              onClick={() => handleClick('=')}
            >
              =
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

Calculator.propTypes = {
  handleClick: PropTypes.func.isRequired,
  total: PropTypes.string,
  next: PropTypes.string,
};

export default Calculator;
