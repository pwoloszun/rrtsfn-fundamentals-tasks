import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

import BeforeFollowersList from './containers/BeforeFollowersList';
import AfterFollowersList from './containers/AfterFollowersList';
import MemoAfterFollowersList from './containers/MemoAfterFollowersList';

export default function SimpleOptimizationsPage(): React.ReactElement {
  const entitiesCount = 200;

  return (
    <Container>
      <Row>
        <Col>
          <h6>before</h6>
          <BeforeFollowersList entitiesCount={entitiesCount} />
        </Col>
        <Col>
          <h6>after</h6>
          <AfterFollowersList entitiesCount={entitiesCount} />
        </Col>
        <Col>
          <h6>memo</h6>
          <MemoAfterFollowersList entitiesCount={entitiesCount} />
        </Col>
      </Row>
    </Container>
  );
}
