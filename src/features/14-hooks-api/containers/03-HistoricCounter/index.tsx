import React from 'react';

import Counter from '../../../../components/Counter';
import usePrevious from '../../hooks/usePrevious';

export default function HistoricCounter() {
  const [currentValue, prevValue, setValue] = usePrevious(100);

  const incrementHandler = () => {
    setValue(currentValue + 10);
  };
  const decrementHandler = () => {
    setValue(currentValue - 5);
  };

  return (
    <div>
      <h3>HistoricCounter</h3>
      <h5>Previous Value: {prevValue} </h5>
      <div>
        <Counter value={currentValue}
          onIncrement={incrementHandler}
          onDecrement={decrementHandler}
        />
      </div>
    </div>
  );
}
