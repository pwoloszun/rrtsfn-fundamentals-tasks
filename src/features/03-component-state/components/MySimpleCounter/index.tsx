/*eslint @typescript-eslint/no-unused-vars: 'off'*/

import React from 'react';

import styles from './styles.module.css';

export default function MySimpleCounter(): React.ReactElement {
  const value = 100;
  const incrementHandler = () => {
    // TODO
  };

  return (
    <div className={styles.mySimpleCounter}>
      TODO_PLACEHOLDER
      <button>incr</button>
    </div>
  );
}
