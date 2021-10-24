import React, { useState } from 'react';

import Counter from '../../../../components/Counter';

// TODO: refactor
// import usePrevious from '../../hooks/usePrevious';

const initialValue = 0;

export default function HistoricCounter() {
  // TODO introduce state: previousValue
  // TODO introduce state: currentValue
  const currentValue = -997; // TODO

  const incrementHandler = () => {
    // TODO
  };
  const decrementHandler = () => {
    // TODO
  };

  return (
    <div>
      <h3>HistoricCounter</h3>
      <h5>Previous Value: PREVIOUS_PLACEHOLDER </h5>
      <div>
        <Counter value={currentValue}
          onIncrement={incrementHandler}
          onDecrement={decrementHandler}
        />
      </div>
    </div>
  );
}
