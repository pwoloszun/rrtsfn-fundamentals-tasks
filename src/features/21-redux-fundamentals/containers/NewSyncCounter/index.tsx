import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { actions, selectors } from 'src/store/21b-newSyncCounter';

export default function NewSyncCounter() {
  const dispatch = useDispatch();
  const syncCounterValue = useSelector(
    selectors.selectCounterValue
  );
  const updatedAt = useSelector(
    selectors.selectFormattedCounterUpdatedAt_DECL
  );

  const incrementHandler = () => {
    const action = actions.increment({
      incBy: 5,
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
