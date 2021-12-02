import React, { useState } from 'react';

import Counter from '../../../../components/Counter';
import usePrevious from '../../hooks/usePrevious';

// TODO: refactor
// import usePrevious from '../../hooks/usePrevious';

export default function HistoricCounter() {
  const [currentValue, prevValue, setValue] = usePrevious(-997);
  const [currPer, prevPer, setPer] = usePrevious({ name: 'bob' });

  const incrementHandler = () => {
    setValue(currentValue + 10);
  };

  return (
    <div>
      <h3>HistoricCounter</h3>
      <h5>Previous Value: {prevValue} </h5>
      <div>
        <Counter
          value={currentValue}
          onIncrement={incrementHandler}
        />
      </div>
    </div>
  );
}
