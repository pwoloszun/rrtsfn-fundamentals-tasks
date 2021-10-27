import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { newSyncCounterSliceId } from './newSyncCounterSlice';

const selectStateSlice = (state: RootState) => {
  return 123; // TODO
};

export const selectCounterValue = (state: RootState) => state.newSyncCounter.value;

const selectUpdatedAt = (state: RootState) => state.newSyncCounter.updatedAt;

export const selectFormattedUpdatedAt = (state: RootState) => {
  const updatedAt = state.newSyncCounter.updatedAt;
  if (updatedAt === null) {
    return '';
  } else {
    return new Date(updatedAt).toISOString();
  }
};
