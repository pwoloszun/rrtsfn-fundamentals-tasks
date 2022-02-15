import React from 'react';
import { ListGroup, Button, Row, Col, } from 'react-bootstrap';

export interface TodoItem {
  id: number | string;
  title: string;
  description?: string;
}

export interface TodoListProps<T> {
  todos: T[];
  onRemoveClick: (todo: T) => void;
}

export default function TodoList<T extends TodoItem>(
  props: TodoListProps<T>
): React.ReactElement {
  // TODO

  return (
    <ListGroup>

      {/* iterate over */}
      <ListGroup.Item>
        <Row>
          <Col sm={8}>
            <h5>TITLE_TODO</h5>
            <small>DESC_TODO</small>
          </Col>
          <Col sm={4}>
            <Button
              variant="danger"
              size="sm">
              Remove
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>


    </ListGroup>
  );
}
