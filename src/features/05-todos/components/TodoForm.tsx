import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { produce } from 'immer';

export interface OnCreateParams {
  title: string;
  description: string;
}

interface TodoFormProps {
  onCreateClick: (params: OnCreateParams) => void;
}

export default function TodoForm(props: TodoFormProps): React.ReactElement {
  const { onCreateClick } = props;
  const [formValues, setFormValues] = useState({
    title: '',
    description: ''
  });

  const inputChangeHandler = (ev: any) => {
    const { value, name } = ev.target;
    setFormValues((currFormValues) => {
      const nextFormValues = produce(currFormValues, (draft) => {
        (draft as any)[name] = value;
      });
      return nextFormValues;
    });
  };

  const submitHandler = (ev: any) => {
    ev.preventDefault();
    onCreateClick(formValues);
  };

  return (
    <Card>
      <Card.Header>Create Todo Form</Card.Header>
      <Card.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>

            <Form.Control
              value={formValues.title}
              onChange={inputChangeHandler}
              name="title"
              type="text"
              placeholder="Enter title" />

          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description (optional)</Form.Label>

            <Form.Control
              value={formValues.description}
              onChange={inputChangeHandler}
              name="description"
              type="text"
              placeholder="Enter description" />

          </Form.Group>

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
