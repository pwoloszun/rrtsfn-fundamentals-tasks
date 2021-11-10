import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { newSyncCounterSliceId } from './newSyncCounterSlice';

export const selectStateSlice = (state: RootState) => {
  return 123; // TODO
};


export const selectCounterValue = (state: RootState) => state.newSyncCounter.value;
// TODO
export const selectCounterUpdatedAt = (state: RootState) => state.newSyncCounter.updatedAt;

// TODO
// export const selectSquareValue
