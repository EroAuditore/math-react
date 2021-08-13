import React, { useState } from 'react';

import { Col, Row, Button } from 'react-bootstrap';

import calculate from '../Logic/calculate';

const Calculator = () => {
  const [calcState, setCalcState] = useState({
    total: null,
    next: '',
    result: '0',
    operation: null,
  });

  const resultDisplay = (result) => {
    if (result.next) {
      return result.next;
    }
    if (result.total !== null) {
      return result.total;
    }
    return '0';
  };

  const handleClick = (btnName) => {
    const { next, total, operation } = calcState;

    const obj = {
      total,
      next,
      operation,
    };
    try {
      const resultCalculate = calculate(obj, btnName);
      setCalcState({
        result: resultDisplay(resultCalculate),
        next: resultCalculate.next,
        total: resultCalculate.total,
        operation: resultCalculate.operation,
      });
    } catch {
      setCalcState({
        result: 'Error',
        next: '',
        total: null,
        operation: null,
      });
    }
  };

  const { result } = calcState;

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
            onClick={() => handleClick('÷')}
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
};

export default Calculator;
