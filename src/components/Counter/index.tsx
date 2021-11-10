import React from 'react';

import styles from './index.module.css';

export interface CounterProps {
  value: number;
  squareValue?: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

function Counter(props: CounterProps) {
  const { value, onIncrement, onDecrement, squareValue, onReset } = props;

  return (
    <div className={styles.counter}>
      <h3>Counter</h3>
      <h2>Value: {value}</h2>
      <h5>Square: {squareValue}</h5>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>

      {/* <div role="button" onClick={onIncrement}>Increment</div>
      <div role="button" onClick={onDecrement}>Decrement</div>
      <div role="button" onClick={onReset}>Reset</div> */}
    </div>
  );
}

Counter.defaultProps = {
  squareValue: undefined,
  onReset: () => {
  },
} as Partial<CounterProps>;

export default Counter;
