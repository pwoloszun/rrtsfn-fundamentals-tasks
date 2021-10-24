import { createSelector } from 'reselect';

import { RootState } from '../store';

import { classicAsyncCounterWithSagaSliceId } from './reducer';

const selectFeature = (state: RootState) => {
  return state[classicAsyncCounterWithSagaSliceId];
};

export const selectAsyncCounterValue = createSelector(
  selectFeature,
  (state) => state.asyncValue
);

// TODO
export const selectIsLoading = () => true;

export const selectUpdatedAt = createSelector(
  selectFeature,
  (state) => state.updatedAt
);

export const selectErrorMessage = createSelector(
  selectFeature,
  (state) => state.errorMessage
);

// TODO
export const selectFormattedUpdatedAt = (state: any) => {
  return '2020-12-15 12:34:03';
};
