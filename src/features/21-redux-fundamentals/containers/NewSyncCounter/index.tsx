import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { RootState } from 'src/store/store';
import { actions, selectors } from 'src/store/21b-newSyncCounter'; // redux module


export default function NewSyncCounter() {
  const syncCounterValue = useSelector(
    (state: RootState) => state.newSyncCounter.value
  );
  const dispatch = useDispatch();
  const updatedAt = 999999;

  const incrementHandler = () => {
    const action = actions.increment({
      incBy: 10,
      timestamp: Date.now()
    });
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
