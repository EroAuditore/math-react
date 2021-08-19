import React from 'react';
import { Card } from 'react-bootstrap';

const Quote = () => (
  <>
    <Card border="primary" style={{ width: '100%' }} className="mb-2">
      <Card.Header>William Paul Thurston</Card.Header>
      <Card.Body>
        <Card.Text>
          Mathematics is not about numbers, equations, computations, or
          algorithms: It is about understanding.
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

export default Quote;
