import produce from 'immer';
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

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
    descriptionTmp: ''
  });

  const inputChangeHandler = (ev: any) => {
    const { value, name } = ev.target;
    setFormValues((currFormValues) => {
      const nextFormValues = produce(currFormValues, (draft: any) => {
        draft[name] = value;
      });
      return nextFormValues;
    });
  };

  const submitHandler = (ev: any) => {
    ev.preventDefault();
    onCreateClick({
      title: formValues.titleTmp,
      description: formValues.descriptionTmp
    });
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
              type="text"
              value={formValues.titleTmp}
              name="titleTmp"
              onChange={inputChangeHandler}
              placeholder="Enter title" />

          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description (optional)</Form.Label>

            {/* TODO 2 */}
            <Form.Control
              type="text"
              value={formValues.descriptionTmp}
              name="descriptionTmp"
              onChange={inputChangeHandler}
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
