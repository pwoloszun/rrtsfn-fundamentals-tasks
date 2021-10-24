import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';

import { MailEntity } from 'src/api/mymail-api';

export interface IMailListProps {
  mails: MailEntity[];
}

export default function MailList(props: IMailListProps): React.ReactElement {
  const { mails } = props;

  const handleEdit = () => {
    console.log('edit td');
  };

  return (
    <ListGroup>
      {
        mails.map((mail) => {
          return (
            <ListGroup.Item key={mail.id} action onClick={handleEdit}>
              <Container>
                <Row>
                  <Col md={4}>
                    {mail.from}
                  </Col>
                  <Col md={4}>
                    {mail.title}
                  </Col>
                  <Col md={2}>
                    ({mail.status})
                  </Col>
                  <Col md={2}>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          );
        })
      }
    </ListGroup>
  );
}
