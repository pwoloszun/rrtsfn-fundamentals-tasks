import React from 'react';
import { ListGroup, Button, Row, Col, } from 'react-bootstrap';

interface TodoDto {
  id: number;
  title: string;
  description?: string;
}

interface TodoListProps {
  todos: TodoDto[];
  onRemoveClick: (todo: TodoDto) => void;
}

export default function TodoList(props: TodoListProps): React.ReactElement {
  const { todos, onRemoveClick } = props;

  return (
    <ListGroup>
      {
        todos.map((todo) => {
          const removeClickHandler = () => {
            onRemoveClick(todo);
          };

          return (
            <ListGroup.Item key={todo.id}>
              <Row>
                <Col sm={8}>
                  <h5>{todo.title}</h5>
                  <small>{todo.description}</small>
                </Col>
                <Col sm={4}>
                  <Button
                    onClick={removeClickHandler}
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
