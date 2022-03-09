import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { actions, selectors } from 'src/store/21b-newSyncCounter'; // redux module

// SMART
// + GOOD: WHAT app is doing
// - BAD: HOW app is doing
export default function NewSyncCounter() {
  const dispatch = useDispatch();
  const syncCounterValue = useSelector(
    selectors.selectCounterValue
  );
  const updatedAt = 999999;

  const incrementHandler = () => {
    const action = actions.counter_increment({ incBy: 20 });
    dispatch(action);
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
