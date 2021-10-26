import React, { useState } from 'react';

import Counter from '../../../../components/Counter';

// TODO: refactor
import usePrevious from '../../hooks/usePrevious';

export default function HistoricCounter() {
  // const [previousValue, setPreviousValue] = useState<number | undefined>(undefined);
  // const [currentValue, setCurrentValue] = useState(100);
  const [
    currentValue,
    previousValue,
    setCurrentValue
  ] = usePrevious(100);


  const incrementHandler = () => {
    setCurrentValue(currentValue + 10);
    // setPreviousValue(currentValue);
    // setCurrentValue(currentValue + 10);
  };
  const decrementHandler = () => {
    // setCurrentValue(currentValue - 5);
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
