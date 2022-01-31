/*eslint @typescript-eslint/no-unused-vars: 'off'*/

import React, { useState } from 'react';

import styles from './styles.module.css';

// pseudo code
const _state = {
  [0]: 110
};

export default function MySimpleCounter(): React.ReactElement {
  const [value, setValue] = useState(100); // piece of state

  const incrementHandler = () => {
    setValue((currValue) => {
      const nextValue = currValue + 10;
      return nextValue;
    });

    setValue((currValue) => currValue + 10);
  };

  return (
    <div className={styles.mySimpleCounter}>
      <h3>Value: {value}</h3>
      <button onClick={incrementHandler}>incr</button>
    </div>
  );
}
