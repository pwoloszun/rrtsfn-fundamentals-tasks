import React from 'react';
import { ListGroup, Button, Row, Col, } from 'react-bootstrap';

import { TodoDto } from 'src/api/dto/todo-dto';

interface TodoListProps {
  todos: TodoDto[];
  onRemoveClick: (todo: TodoDto) => void;
}

export default function TodoList(props: TodoListProps): React.ReactElement {
  // TODO
  
  return (
    <ListGroup>
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
