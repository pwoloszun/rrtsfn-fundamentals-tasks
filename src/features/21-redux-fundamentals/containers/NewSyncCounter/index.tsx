import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
// import { actions, selectors } from 'src/store/21-syncCounter'; // redux module

export default function NewSyncCounter() {
  const syncCounterValue = 123456;
  const updatedAt = 999999;

  const incrementHandler = () => {
  };

  return (
    <div>
      <h3>NewSyncCounter</h3>
      <p>Upd at {updatedAt}</p>
      <Counter
        value={syncCounterValue}
        onIncrement={incrementHandler}
      />
    </div>
  );
}
