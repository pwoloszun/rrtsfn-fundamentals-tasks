import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { asyncCounterWithSagaSliceId } from './asyncCounterWithSagaSlice';

const selectStateSlice = (state: RootState) => {
  return state[asyncCounterWithSagaSliceId];
};

export const selectAsyncCounterWithSagaValue = createSelector(
  [selectStateSlice],
  (state) => {
    return state.asyncWithSagaValue;
  }
);

export const selectIsLoading = createSelector(
  [selectStateSlice],
  (state) => {
    return state.isLoading;
  }
);
