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
    increment: (state, action: PayloadAction<any>) => {
      state.value += 10;
    },

    gggHhh: () => { }


    // TODO: decrement

    // TODO: reset
  },
});

export const actions = newSyncCounterSlice.actions;

export default newSyncCounterSlice.reducer;
