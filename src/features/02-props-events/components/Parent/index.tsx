import React, { useCallback } from 'react';

import ParentChild from '../ParentChild';

import styles from './styles.module.css';

export default function Parent(): React.ReactElement {
  const user = {
    name: `Batman ${Math.random()}`
  };
  const logMessageHandler = useCallback((message: string): void => {
    console.log('parent received', message);
  }, []);

  return (
    <div className={styles.parent}>
      <h3>Parent component</h3>
      <p>
        Parent user: {user.name}
      </p>
      <div>



        <ParentChild
          fullName={user.name}
          onMessageSend={logMessageHandler}
        />




      </div>
    </div>
  );
}
