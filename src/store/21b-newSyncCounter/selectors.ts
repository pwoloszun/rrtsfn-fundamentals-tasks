import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { newSyncCounterSliceId } from './newSyncCounterSlice';

export const selectStateSlice = (state: RootState) => {
  return 123; // TODO
};

// TODO
export const selectCounterValue = (state: RootState) => state.newSyncCounter.value;

// TODO
export const selectUpdatedAt = (state: RootState) => state.newSyncCounter.updatedAt;
