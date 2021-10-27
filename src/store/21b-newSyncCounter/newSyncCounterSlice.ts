import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { // slice state shape
  value: number;
  updatedAt: number | null;
}

const initialState: CounterState = { // initial slice state
  value: 400,
  updatedAt: null,
};

export const newSyncCounterSliceId = 'newSyncCounter'; // slice id

const newSyncCounterSlice = createSlice({
  name: newSyncCounterSliceId,

  initialState: initialState,

  reducers: {
    increment: (state, action: PayloadAction<{ incBy: number; }>) => {
      const { incBy } = action.payload;
      state.value += incBy;
    },

    decrement: (state, action: PayloadAction<{ decBy: number; timestamp: number; }>) => {
      const { decBy, timestamp } = action.payload;
      state.value -= decBy;
      state.updatedAt = timestamp;
    },


    // TODO: decrement

    // TODO: reset
  },
});

export const actions = newSyncCounterSlice.actions;

export default newSyncCounterSlice.reducer;
