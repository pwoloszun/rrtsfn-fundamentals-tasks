import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { // slice state shape
  value: number;
  updatedAt: number | null;
}

const initialState: CounterState = { // initial slice state
  value: 300,
  updatedAt: null,
};

export const newSyncCounterSliceId = 'ggg HHH'; // slice id

const newSyncCounterSlice = createSlice({
  name: newSyncCounterSliceId,

  initialState,

  reducers: {

    increment: (state, action: PayloadAction<{ incBy: number; timestamp: number; }>) => {
      const { incBy, timestamp } = action.payload;
      state.value += incBy;
      state.updatedAt = timestamp;
    },

    gggHhh: () => {

    },

    tttUuu: () => {

    },

    // TODO: decrement

    // TODO: reset
  },
});

export const actions = newSyncCounterSlice.actions;

export default newSyncCounterSlice.reducer;
