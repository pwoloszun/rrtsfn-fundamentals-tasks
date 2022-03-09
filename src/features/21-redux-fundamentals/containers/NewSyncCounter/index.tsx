import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { RootState } from 'src/store/store';
// import { actions, selectors } from 'src/store/21-syncCounter'; // redux module

export default function NewSyncCounter() {
  const dispatch = useDispatch();
  const syncCounterValue = useSelector(
    (state: RootState) => state.newSyncCounter.value
  );
  const updatedAt = 999999;

  const incrementHandler = () => {
    const action2 = {
      type: 'newSyncCounter/counter_increment',
      uuu: 123,

    };
    dispatch(action2);
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
