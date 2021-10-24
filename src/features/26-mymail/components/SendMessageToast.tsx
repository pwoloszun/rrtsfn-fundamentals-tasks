import React from 'react';
import { Toast, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from 'src/store/26-mymail';

import useTimeout from '../hooks/useTimeout';

const cssStyles = {
  position: 'absolute' as any,
  top: 80,
  right: 20,
  backgroundColor: '#333',
  color: '#fff',
  padding: '6px',
};

export default function SendMessageToast(): React.ReactElement {
  const isSendingMail = false; //TODO
  const isSendingCancelled = false; //TODO
  const isSendingReversible = false; //TODO
  const isSentRolledBack = false; //TODO
  const isSent = false; //TODO

  const show = isSendingMail || isSendingCancelled || isSendingReversible || isSentRolledBack || isSent;

  let content: React.ReactNode = null;
  if (isSendingMail) {
    content = <SendingMailContent />;
  } else if (isSendingCancelled) {
    content = <SendingCancelledContent />;
  } else if (isSendingReversible) {
    content = <ReversibleMailSentContent />;
  } else if (isSentRolledBack) {
    content = <RolledbackAppliedContent />;
  } else if (isSent) {
    content = <MailSuccessfullySentContent />;
  }

  return (
    <Toast show={show} delay={3000} autohide style={cssStyles}>
      <Toast.Body>{content}</Toast.Body>
    </Toast>
  );
}

function SendingMailContent() {
  //TODO
  const handleCancel = () => {
    //TODO
  };

  return (
    <div>
      Sending...
      <Button onClick={handleCancel}>Cancel</Button>
    </div>
  );
}

function SendingCancelledContent() {
  //TODO

  return (
    <div>
      Canceling...
    </div>
  );
}

function ReversibleMailSentContent() {
  //TODO
  const handleRollback = () => {
    //TODO
  };

  return (
    <div>
      Mail has been sent.
      <Button onClick={handleRollback}>Revert</Button>
    </div>
  );
}

function RolledbackAppliedContent() {
  //TODO

  return (
    <div>
      Reverting changes...
    </div>
  );
}

function MailSuccessfullySentContent() {
  //TODO

  return (
    <div>
      Mail successfully sent!
    </div>
  );
}
