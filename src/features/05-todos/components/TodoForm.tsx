import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import produce from 'immer';

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
    titleTmp: '',
    descriptionTmp: '',
  });

  const inputChangeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormValues((currFormValues) => {
      const nextFormValues = produce(currFormValues, (draft) => {
        (draft as any)[name] = value;
      });
      return nextFormValues;
    });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    onCreateClick({
      title: formValues.titleTmp,
      description: formValues.descriptionTmp,
    });
  };

  return (
    <Card>
      <Card.Header>Create Todo Form</Card.Header>
      <Card.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>

            <Form.Control
              value={formValues.titleTmp}
              onChange={inputChangeHandler}
              name="titleTmp"
              type="text"
              placeholder="Enter title" />

          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description (optional)</Form.Label>

            <Form.Control
              value={formValues.descriptionTmp}
              onChange={inputChangeHandler}
              name="descriptionTmp"
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
