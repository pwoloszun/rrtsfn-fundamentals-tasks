import React from 'react';
import { Card, Form } from 'react-bootstrap';

import useDebounce from '../../hooks/useDebounce';

export default function SearchWithDebounce() {
  const [searchTerm, setSearchTerm] = useDebounce('', 1200);

  console.log(`searchHandler`, searchTerm);

  return (
    <Card>
      <Card.Header>SearchWithDebounce</Card.Header>
      <Card.Body>
        <Form onSubmit={(ev) => ev.preventDefault()}>

          <Form.Group controlId="searchField">
            <Form.Label>Search</Form.Label>
            <Form.Control onChange={(ev) => setSearchTerm(ev.target.value)}
              type="text"
              placeholder="Enter search phrase" />
          </Form.Group>

        </Form>
      </Card.Body>
    </Card>
  );
}
