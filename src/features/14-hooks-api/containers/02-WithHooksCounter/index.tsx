import React, { useState } from 'react';

import Counter from '../../../../components/Counter';

export default function WithHooksCounter(props: {}) {
  const [myValue, setMyValue] = useState(997);

  const incrementHandler = () => setMyValue(myValue + 5);
  const decrementHandler = () => setMyValue(myValue - 2);

  return (
    <div>
      <h3>WithHooksCounter</h3>
      <div>
        <Counter value={myValue}
          onIncrement={incrementHandler}
          onDecrement={decrementHandler}
        />
      </div>
    </div>
  );
}
