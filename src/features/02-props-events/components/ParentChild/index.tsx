import React from 'react';

import styles from './styles.module.css';

interface ParentChildProps {
  fullName: string;
  onMessageSend: (message: string) => void;
}

export default function ParentChild(props: ParentChildProps): React.ReactElement {
  const { fullName, onMessageSend } = props;
  const sendMessageHandler = () => {
    onMessageSend(`child msg: ${Math.random()}`);
  };

  return (
    <div className={styles.parentChild}>
      <h3>ParentChild component</h3>
      <p>Child received: {fullName}</p>
      <div>
        <button onClick={sendMessageHandler}>Send</button>
      </div>
    </div>
  );
}
