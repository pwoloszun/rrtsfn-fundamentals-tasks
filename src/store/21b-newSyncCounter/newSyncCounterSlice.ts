import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { // slice state shape
  value: number;
  updatedAt: number | null;
}

const initialState: CounterState = { // initial slice state
  value: 300,
  updatedAt: null,
};

export const newSyncCounterSliceId = 'newSyncCounter'; // slice id

const newSyncCounterSlice = createSlice({
  name: newSyncCounterSliceId,

  initialState,

  reducers: {
    counter_increment: (state, action: PayloadAction<{ incBy: number; }>) => {
      const { incBy } = action.payload;
      state.value += incBy;
      console.log('red:', state, action);
    },

    tttYyy: (state, action: PayloadAction<any>) => {
      // TODO
    },
    // TODO: decrement

    // TODO: reset
  },
});

export const actions = newSyncCounterSlice.actions;

export default newSyncCounterSlice.reducer;
