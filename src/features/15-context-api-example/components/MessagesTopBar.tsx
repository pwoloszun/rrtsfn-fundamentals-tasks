import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';

export default function MessagesTopBar(): React.ReactElement {
  // TODO inject messagesFacade

  return (
    <Card bg="secondary" text="light">
      <Card.Body>
        <Card.Title>
          <Row>
            <Col sm={9}>Messages TopBar</Col>
            <Col>
              <h3>
                <Badge variant="danger" pill className="bg-danger text-light">
                  MESSAGES_COUNT_PLACEHOLDER
                </Badge>
              </h3>
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
