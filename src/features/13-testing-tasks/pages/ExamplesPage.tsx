import React, { useState } from 'react';

import AsyncTimerExample from '../examples/AsyncTimerExample';
import MyAjaxCounter from '../examples/MyAjaxCounter';
import MyCounter from '../examples/MyCounter';

export default function ExamplesPage(): React.ReactElement {
  const [pureValue, setPureValue] = useState(100);

  const pureIncHandler = () => {
    setPureValue((currPureValue) => currPureValue + 10);
  };
  const pureDecHandler = () => {
    setPureValue((currPureValue) => currPureValue - 5);
  };

  return (
    <div>
      <h3>ExamplesPage</h3>

      <MyCounter value={pureValue}
        onIncrement={pureIncHandler}
        onDecrement={pureDecHandler}
      />
      <hr />

      <MyAjaxCounter />
      <hr />

      <AsyncTimerExample />
      <hr />

    </div>
  );
}

