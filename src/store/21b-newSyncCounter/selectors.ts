import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { newSyncCounterSliceId } from './newSyncCounterSlice';

const selectStateSlice = (state: RootState) => {
  return state[newSyncCounterSliceId];
};

export const selectCounterValue = (state: RootState) => {
  const sliceState = selectStateSlice(state);
  return sliceState.value;
}

export const selectCounterUpdatedAt = (state: RootState) => {
  const sliceState = selectStateSlice(state);
  return sliceState.updatedAt;
}

export const selectFormattedCounterUpdatedAt = (state: RootState) => {
  const updatedAt = selectCounterUpdatedAt(state);
  if (updatedAt === null) {
    return '';
  } else {
    return new Date(updatedAt).toISOString();
  }
};

// TODO
// export const selectSquareValue
