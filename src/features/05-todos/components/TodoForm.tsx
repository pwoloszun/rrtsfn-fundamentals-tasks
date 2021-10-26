import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { values } from 'lodash';

export interface OnCreateParams {
  title: string;
  description?: string;
}

interface TodoFormProps {
  onCreateClick: (params: OnCreateParams) => void;
}

type FormEl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export default function TodoForm(props: TodoFormProps): React.ReactElement {
  const { onCreateClick } = props;
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
  });

  const inputChangeHandler = (event: React.ChangeEvent<FormEl>) => {
    const { name, value } = event.target;
    setFormValues((currFormValues) => {
      const nextFormValues = {
        ...currFormValues,
        [name]: value
      };
      return nextFormValues;
    });
  };

  const submitHandler = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    onCreateClick({ ...formValues });
  };

  return (
    <Card>
      <Card.Header>Create Todo Form</Card.Header>
      <Card.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            {/* TODO 2 */}

            <Form.Control
              value={formValues.title}
              onChange={inputChangeHandler}
              name="title"

              type="text"
              placeholder="Enter title" />

          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description (optional)</Form.Label>
            {/* TODO 2 */}

            <Form.Control
              value={formValues.description}
              onChange={inputChangeHandler}
              name="description"

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
