import React, { useState } from 'react';

import styles from './MyCounter.module.css';

export interface IMyCounterProps {
  initialValue?: number;
  gggHhh: string;
}

export default function MyCounter(props: IMyCounterProps): React.ReactElement {
  const { initialValue = 0 } = props;
  const [value, setValue] = useState(initialValue);

  const incrementHandler = () => setValue((val) => val + 1);
  const decrementHandler = () => setValue((val) => val - 1);

  return (
    <div className={styles.myCounter}>
      <h5>MyCounter</h5>
      <h2>Value: {value}</h2>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
}

