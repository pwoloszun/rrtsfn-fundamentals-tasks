import React, { useEffect, useState } from 'react';

import MailList from 'src/components/MailList';
import mymailApi, { MailEntity } from 'src/api/mymail-api';

import BetterCreateDraftMailButton from './components/BetterCreateDraftMailButton';
import BetterSendMessageToast from './components/BetterSendMessageToast';

const BetterMailPage: React.FunctionComponent = () => {
  const [mails, setMails] = useState<MailEntity[]>([]);

  useEffect(() => {
    mymailApi.getAll()
      .then((mails) => {
        console.log('mails', mails);
        setMails(mails);
      });
  }, []);

  return (
    <div>
      <h3>Better Mail page</h3>
      <BetterCreateDraftMailButton />
      <MailList mails={mails} />
      <BetterSendMessageToast />
    </div>
  );
};

export default BetterMailPage;

