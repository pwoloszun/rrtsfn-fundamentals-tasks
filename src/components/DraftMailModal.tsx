import React, { useState } from 'react';
import { Button, Modal, Container, Row, Col, Form } from 'react-bootstrap';

import { MailEntityParams } from 'src/api/mymail-api';

interface IDraftMailModalProps {
  mail: MailEntityParams;
  show: boolean;
  onClose: (params: MailEntityParams) => void;
  onSend: (params: MailEntityParams) => void;
  onRemove: () => void;
}

export default function DraftMailModal(props: IDraftMailModalProps): React.ReactElement {
  const { onClose, onSend, onRemove, show, mail } = props;
  const [formValues, setFormValues] = useState<MailEntityParams>({ ...mail });

  const handleClose = () => {
    onClose(formValues);
  };
  const handleSend = (ev: any) => {
    ev.preventDefault();
    onSend(formValues);
  };
  const handleRemove = () => {
    onRemove();
  };

  const handleCtrlChange = (ev: any) => {
    const { name, value } = ev.target;
    setFormValues((vals) => ({ ...vals, [name]: value }));
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" centered>
      <Form onSubmit={handleSend}>
        <Modal.Header closeButton>
          <Modal.Title>Draft Mail</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group controlId="mailTo">
            <Form.Label>Send To:</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              value={formValues.to} name="to" onChange={handleCtrlChange} />
          </Form.Group>

          <Form.Group controlId="mailTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title"
              value={formValues.title} name="title" onChange={handleCtrlChange} />
          </Form.Group>

          <Form.Group controlId="mailContent">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={3}
              value={formValues.content} name="content" onChange={handleCtrlChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col md={8}>
                <Button variant="primary" type="submit">Send</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Col>
              <Col md={4}>
                <Button variant="danger" onClick={handleRemove}>Remove</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
