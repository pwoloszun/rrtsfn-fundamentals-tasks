import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { newSyncCounterSliceId } from './newSyncCounterSlice';

const selectStateSlice = (state: RootState) => {
  return 123; // TODO
};

// TODO
// export const selectCounterValue

// TODO
// export const selectSquareValue
export const selectCounterValue = (state: RootState) => state.newSyncCounter.value;
