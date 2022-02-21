import React from 'react';
import { Button } from 'react-bootstrap';

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
      <h2>VALUE: {value}</h2>
      <div>
        <a role="button" onClick={incrementHandler}>
          Increment
        </a>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
}

