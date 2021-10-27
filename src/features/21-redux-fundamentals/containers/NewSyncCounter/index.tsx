import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
// import { actions, selectors } from 'src/store/21-syncCounter'; // redux module
import { RootState } from '../../../../store/store';

export default function NewSyncCounter() {
  const dispatch = useDispatch();
  const syncCounterValue = useSelector(
    (state: RootState) => state.newSyncCounter.value
  );
  const updatedAt = 999999;

  const incrementHandler = () => {
    const action = {
      type: 'newSyncCounter/increment',
      payload: { name: 'bob' }
    };
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
