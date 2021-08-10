import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h2>Calculator:</h2>
        <Row>
          <Col xs={12} className="p-0">
            <div className="bg-secondary text-end text-white pe-3"> 0</div>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              AC
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              +/-
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              %
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="warning" className="w-100">
              %
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              7
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              8
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              9
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="warning" className="w-100">
              x
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              4
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              5
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              6
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="warning" className="w-100">
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              1
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              2
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              3
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="warning" className="w-100">
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="p-0">
            <Button variant="secondary" className="w-100">
              0
            </Button>
          </Col>
          <Col xs={3} className="p-0">
            <Button variant="secondary" className="w-100">
              .
            </Button>
          </Col>

          <Col xs={3} className="p-0">
            <Button variant="warning" className="w-100">
              =
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default Calculator;
