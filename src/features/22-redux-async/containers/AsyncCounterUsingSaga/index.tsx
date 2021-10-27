import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actions, selectors } from 'src/store/22b-asyncCounterWithSaga';

import Counter from '../../../../components/Counter';

export default function AsyncCounterUsingSaga() {
  const dispatch = useDispatch();
  const value = useSelector(
    selectors.selectAsyncCounterWithSagaValue
  );
  const isLoading = useSelector(
    selectors.selectIsLoading
  );

  const onIncrementHandler = () => {
    const action = actions.incrementRequest({
      incBy: 10
    });
    dispatch(action);
  };

  return (
    <div>
      <Counter
        value={value}
        onIncrement={onIncrementHandler}
      />
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
