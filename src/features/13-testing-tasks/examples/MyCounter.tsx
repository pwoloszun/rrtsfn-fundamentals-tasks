import React from 'react';

import styles from './MyCounter.module.css';

export interface IMyCounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function MyCounter(props: IMyCounterProps): React.ReactElement {
  const { value, onDecrement, onIncrement } = props;

  const incrementHandler = () => onIncrement();
  const decrementHandler = () => onDecrement();

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

