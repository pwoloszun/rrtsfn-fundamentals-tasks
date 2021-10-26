import React, { useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';

import useDebounce from '../../hooks/useDebounce';

export default function SearchWithDebounce() {
  const [searchTerm, setSearchTerm] = useDebounce('', 1200);

  useEffect(() => {
    console.log('emulated REQ query:', searchTerm);
  }, [searchTerm]);

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
        <div>
          Search query: {searchTerm}
        </div>
      </Card.Body>
    </Card>
  );
}
