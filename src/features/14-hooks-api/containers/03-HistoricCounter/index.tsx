import React, { useState } from 'react';

import Counter from '../../../../components/Counter';

// TODO: refactor
import usePrevious from '../../hooks/usePrevious';

export default function HistoricCounter() {
  const [currentValue, previousValue, setValue] = usePrevious(100);
  // const [person, prevPerson, setPerson] = usePrevious({ name: 'bob' });

  const incrementHandler = () => {
    setValue(currentValue + 10);
  };

  return (
    <div>
      <h3>HistoricCounter</h3>
      <h5>Previous Value: {previousValue} </h5>
      <div>
        <Counter value={currentValue}
          onIncrement={incrementHandler}
        />
      </div>
    </div>
  );
}
