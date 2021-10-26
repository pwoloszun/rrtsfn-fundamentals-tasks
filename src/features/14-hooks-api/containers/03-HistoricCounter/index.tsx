import React, { useState } from 'react';

import Counter from '../../../../components/Counter';

// TODO: refactor
import usePrevious from '../../hooks/usePrevious';

export default function HistoricCounter() {
  const [
    currentValue,
    previousValue,
    setCurrent
  ] = usePrevious(100);

  const incrementHandler = () => {
    setCurrent(currentValue + 10);

  };
  const decrementHandler = () => {
    setCurrent(currentValue - 5);
  };

  return (
    <div>
      <h3>HistoricCounter</h3>
      <h5>Previous Value: {previousValue} </h5>
      <div>
        <Counter value={currentValue}
          onIncrement={incrementHandler}
          onDecrement={decrementHandler}
        />
      </div>
    </div>
  );
}
