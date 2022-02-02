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
      <div role="region" aria-label="Upper Panel">
        <button onClick={incrementHandler}>Other Inc</button>
      </div>
      <h5>MyCounter</h5>
      <h2>Value: {value}</h2>
      <div role="region" aria-label="Lower Panel">
        <div role="button" onClick={incrementHandler}>Increment</div>

        <button onClick={decrementHandler}>Decrement</button>

        <button onClick={testClickHandler}>Lucky Numbers</button>
      </div>

      <ul role="list">
        <li role="listitem">a</li>
        <li role="listitem">b</li>
        <li role="listitem">c</li>

      </ul>
    </div>
  );
}

