import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export interface OnCreateParams {
  title: string;
  description?: string;
}

interface TodoFormProps {
  onCreateClick: (params: OnCreateParams) => void;
}

export default function TodoForm(props: TodoFormProps): React.ReactElement {
  // TODO 1

  return (
    <Card>
      <Card.Header>Create Todo Form</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            {/* TODO 2 */}
            <Form.Control
              type="text"
              placeholder="Enter title" />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description (optional)</Form.Label>
            {/* TODO 2 */}
            <Form.Control
              type="text"
              placeholder="Enter description" />
          </Form.Group>

          {/* TODO 3 */}
          <Button
            variant="primary"
            type="submit">
            Create
            </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
