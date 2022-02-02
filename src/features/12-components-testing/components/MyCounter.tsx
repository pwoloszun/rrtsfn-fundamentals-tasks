import React, { useState } from 'react';

import styles from './MyCounter.module.css';

export interface IMyCounterProps {
  initialValue?: number;
  onMyTest?: (lucvkyNumbers: number[]) => void;
}

export default function MyCounter(props: IMyCounterProps): React.ReactElement {
  const { initialValue = 0, onMyTest } = props;
  const [value, setValue] = useState(initialValue);

  const incrementHandler = () => setValue((val) => val + 1);
  const decrementHandler = () => setValue((val) => val - 1);

  const testClickHandler = () => {
    if (onMyTest) {
      onMyTest([123, 456]);
    }
  };


  return (
    <div className={styles.myCounter}>
      <h5>MyCounter</h5>
      <h2>Value: {value}</h2>
      <div>
        <div role="button" onClick={incrementHandler}>Increment</div>
        <button onClick={decrementHandler}>Decrement</button>

        <button onClick={testClickHandler}>Lucky Numbers</button>
      </div>
    </div>
  );
}

