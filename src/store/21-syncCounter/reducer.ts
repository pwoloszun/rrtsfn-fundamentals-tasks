import { produce } from 'immer';

import * as types from "./types";

// TODO: Slice State Shape

// initial feature state value
const initialState = {
  value: -9,
  updatedAt: 200000,
};

// feature/slice id
export const syncCounterSliceId = 'syncCounter';

export default function syncCounterReducer(
  state = initialState,
  action: any
): any {
  switch (action.type) {

    case types.INCREMENT: {
      // TODO 1: nextState
      // TODO 2: refactor
      return state;
    }

    default:
      return state;
  }
}
