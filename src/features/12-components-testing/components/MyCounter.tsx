import React, { useState } from 'react';

import styles from './MyCounter.module.css';

export interface IMyCounterProps {
  initialValue?: number;
}



export default function MyCounter(props: IMyCounterProps): React.ReactElement {
  const { initialValue = 0 } = props;
  const [value, setValue] = useState(initialValue);

  const incrementHandler = () => setValue((val) => val + 1);
  const decrementHandler = () => setValue((val) => val - 1);

  return (
    <div className={styles.myCounter}>
      <h5>MyCounter</h5>
      <div role="region" aria-label="Counter Value" className={styles.valueCont}>
        <h2>Value: {value}</h2>
      </div>
      <div role="region">
        <a role="button" onClick={incrementHandler}>    &nbsp; Increment  &nbsp;&nbsp;&nbsp;&nbsp;</a>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
}

