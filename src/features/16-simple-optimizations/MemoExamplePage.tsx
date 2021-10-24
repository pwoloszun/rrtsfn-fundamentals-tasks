import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';

import MemoAfterFollowersList from './containers/MemoAfterFollowersList';

export default function MemoExamplePage(): React.ReactElement {
  const [value, setValue] = useState(10);
  const incrementHandler = () => setValue((val) => val + 10);
  const entitiesCount = 200;

  return (
    <Container>
      <Row>
        <Col>
          <h6>other state counter</h6>
          <h3>Value: {value}</h3>
          <button onClick={incrementHandler}>Inc</button>
        </Col>
        <Col>
          <h6>memo</h6>
          <MemoAfterFollowersList entitiesCount={entitiesCount} />
        </Col>
      </Row>
    </Container>
  );
}
