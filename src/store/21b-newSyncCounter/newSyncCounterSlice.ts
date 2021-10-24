import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { // slice state shape
  value: number;
  updatedAt: number | null;
}

const initialState: CounterState = { // initial slice state
  value: 110,
  updatedAt: null,
};

export const newSyncCounterSliceId = 'newSyncCounter'; // slice id

const newSyncCounterSlice = createSlice({
  name: newSyncCounterSliceId,

  initialState,

  reducers: {
    increment: (state, action: PayloadAction<any>) => {
      // TODO
    },

    // TODO: decrement

    // TODO: reset
  },
});

export const actions = newSyncCounterSlice.actions;

export default newSyncCounterSlice.reducer;
