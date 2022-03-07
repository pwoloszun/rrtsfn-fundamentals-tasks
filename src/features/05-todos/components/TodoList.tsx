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
  const { todos } = props;

  return (
    <ListGroup>
      {
        todos.map((todo) => {
          return (
            <ListGroup.Item key={todo.id}>
              <Row>
                <Col sm={8}>
                  <h5>{todo.title}</h5>
                  <small>{todo.description}</small>
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
          );
        })
      }
    </ListGroup>
  );
}
