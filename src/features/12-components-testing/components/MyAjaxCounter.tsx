import React, { useState, useEffect } from 'react';

import counterApi from 'src/api/counter-api';
import MySpinner from 'src/components/MySpinner';

import styles from './MyAjaxCounter.module.css';

const counterId = 100;

export default function MyAjaxCounter(): React.ReactElement {
  const [value, setValue] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    counterApi.getById(counterId)
      .then((counterValue) => setValue(counterValue.value))
      .finally(() => setIsLoading(false));
  }, []);

  const incrementHandler = () => {
    if (value === null) {
      return;
    }
    setIsLoading(true);
    counterApi.update(counterId, { value: value + 1 })
      .then((counterValue) => setValue(counterValue.value))
      .finally(() => setIsLoading(false));
  };
  const decrementHandler = () => {
    if (value === null) {
      return;
    }
    setIsLoading(true);
    counterApi.update(counterId, { value: value - 1 })
      .then((counterValue) => setValue(counterValue.value))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.myCounter}>
      <h5>MyAjaxCounter</h5>
      <h2>Value: {value}</h2>
      {isLoading && <MySpinner />}
      <div>
        <button onClick={incrementHandler} disabled={isLoading}>Increment</button>
        <button onClick={decrementHandler} disabled={isLoading}>Decrement</button>
      </div>
    </div>
  );
}

