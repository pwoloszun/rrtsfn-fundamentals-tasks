import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';

export default function MessagesList(): React.ReactElement {
  // TODO inject messagesFacade
  const tmpMessages: any[] = [];

  return (
    <ListGroup variant="flush">
      {
        tmpMessages.map((message) => {
          const { id, title, content } = message;
          return (
            <ListGroup.Item key={id}>
              <Row>
                <Col sm={4}>
                  {title}
                </Col>
                <Col sm={8}>
                  {content}
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })
      }
    </ListGroup>
  );
}
