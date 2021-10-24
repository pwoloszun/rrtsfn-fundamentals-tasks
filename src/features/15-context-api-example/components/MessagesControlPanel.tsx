import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { fake } from 'faker';

export default function MessagesControlPanel(): React.ReactElement {
  // TODO inject messagesFacade

  const createHandler = () => {
    const title = `title ${Math.random()}`;
    const content = `content ${fake('{{lorem.sentence}}')}`;

    // TODO: create message
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>MessagesControlPanel</Card.Title>
        <Button onClick={createHandler} variant="primary">Create Message</Button>
      </Card.Body>
    </Card>
  );
}
