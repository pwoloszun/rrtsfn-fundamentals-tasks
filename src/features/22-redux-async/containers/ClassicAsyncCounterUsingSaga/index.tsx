import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Counter from 'src/components/Counter';

import {
  actions,
  selectors,
} from 'src/store/22c-classicAsyncCounterWithSaga';

export default function ClassicAsyncCounterUsingSaga() {
  const counterId = 100;

  const value = useSelector(selectors.selectAsyncCounterValue);
  const isLoading = useSelector(selectors.selectIsLoading);
  const errorMessage = useSelector(selectors.selectErrorMessage);
  const formattedUpdatedAt = useSelector(selectors.selectFormattedUpdatedAt);

  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(actions.incrementRequest(counterId, 7))
  };
  const onDecrement = () => {
    // TODO
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {errorMessage && <p>Error: {errorMessage}</p>}
      <p>Updated at: {formattedUpdatedAt}</p>
      <Counter
        value={value}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
};
