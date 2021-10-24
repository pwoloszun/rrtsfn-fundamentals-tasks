import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Counter from '../../../../components/Counter';

export default function AsyncCounterUsingSaga() {
  const value = 456;
  const isLoading = true;

  const onIncrementHandler = () => { };

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
