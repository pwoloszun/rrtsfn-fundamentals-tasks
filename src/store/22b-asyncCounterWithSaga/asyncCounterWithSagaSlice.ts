import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AsyncCounterWithSagaState { // slice state shape
  asyncWithSagaValue: number;
  isLoading: boolean;
  errorInfo: {
    info: string;
    error: Error;
  } | undefined;
}

const initialState: AsyncCounterWithSagaState = { // initial slice state
  asyncWithSagaValue: -997,
  isLoading: false,
  errorInfo: undefined
};

export const asyncCounterWithSagaSliceId = 'asyncCounterWithSaga'; // slice ID

const asyncCounterSlice = createSlice({
  name: asyncCounterWithSagaSliceId,

  initialState,

  reducers: {
    incrementRequest: (state, action: PayloadAction<{ incBy: number }>) => {
      state.isLoading = true;
    },
    incrementSuccess: (state, action: PayloadAction<{ incBy: number }>) => {
      const { incBy } = action.payload;
      state.isLoading = false;
      state.asyncWithSagaValue += incBy;
    },

    // TODO: decrement - request & success

    // TODO: reset
  },
});

export const actions = asyncCounterSlice.actions;

export default asyncCounterSlice.reducer;
