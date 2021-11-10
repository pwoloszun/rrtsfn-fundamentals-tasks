import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { actions, selectors } from 'src/store/21b-newSyncCounter';

// other TS module
function useCounterFacade() {
  const dispatch = useDispatch();
  const syncCounterValue = useSelector(
    selectors.selectCounterValue
  );
  const updatedAt = useSelector(
    selectors.selectFormattedCounterUpdatedAt_DECL
  );

  return {
    syncCounterValue,
    updatedAt,

    increment() {
      const action = actions.increment({
        incBy: 5,
        timestamp: Date.now()
      });
      dispatch(action);
    }
  };
}


export default function NewSyncCounter() {
  const counterFacade = useCounterFacade();
  // const dispatch = useDispatch();
  // const syncCounterValue = useSelector(
  //   selectors.selectCounterValue
  // );
  // const updatedAt = useSelector(
  //   selectors.selectFormattedCounterUpdatedAt_DECL
  // );

  const incrementHandler = () => {
    counterFacade.increment();
    // const action = actions.increment({
    //   incBy: 5,
    //   timestamp: Date.now()
    // });
    // dispatch(action);
  };

  return (
    <div>
      <h3>NewSyncCounter</h3>
      <p>Upd at {counterFacade.updatedAt}</p>
      <Counter
        value={counterFacade.syncCounterValue}
        onIncrement={incrementHandler}
      />
    </div>
  );
}
