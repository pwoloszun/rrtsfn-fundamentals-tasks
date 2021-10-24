import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import MessagesList from './MessagesList';
import MessagesProgressBar from './MessagesProgressBar';
import MessagesTopBar from './MessagesTopBar';
import MessagesControlPanel from './MessagesControlPanel';

export default function SharedMessagesTask(): React.ReactElement {
  // TODO MessagesContainer.Provider with initialState === 4

  return (
    <Container>
      <Row>
        <Col>
          <MessagesTopBar />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <MessagesControlPanel />
        </Col>
        <Col>
          <MessagesProgressBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <MessagesList />
        </Col>
      </Row>
    </Container>
  );
}
