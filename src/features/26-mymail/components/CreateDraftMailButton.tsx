import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import DraftMailModal from 'src/components/DraftMailModal';
import { MailEntityParams, MailStatus } from 'src/api/mymail-api';
import { actions, selectors } from 'src/store/26-mymail';

export default function CreateDraftMailButton(): React.ReactElement {
  // TODO
  const isMailOpened = false;

  const handleClose = () => {
    //TODO
  };
  const handleShow = () => {
    //TODO
  };
  const handleSend = (params: MailEntityParams) => {
    //TODO
  };
  const handleRemove = () => {
    console.log('rmv td');
  };
  const mail: MailEntityParams = {
    from: 'you@you.pl',
    to: [],
    title: '',
    content: '',
    createdAt: Date.now(),
    status: MailStatus.draft,
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Mail
      </Button>

      <DraftMailModal
        show={isMailOpened}
        mail={mail}
        onClose={handleClose}
        onSend={handleSend}
        onRemove={handleRemove}
      />
    </>
  );
}
