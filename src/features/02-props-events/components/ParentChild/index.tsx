import React from 'react';

import styles from './styles.module.css';


interface ParentChildProps {
  fullName: string;
  onMessageSent: (message: string) => void;
}

export default function ParentChild(props: ParentChildProps): React.ReactElement {
  // props.fullName === 'a qq!';
  // const fullName = props.fullName;
  // const onMessageSent = props.onMessageSent;
  const { fullName, onMessageSent } = props;

  const sendMessageHandler = () => {
    onMessageSent(`child msg: ${Math.random()}`);
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
