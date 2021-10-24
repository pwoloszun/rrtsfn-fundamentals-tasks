import { customCongfigStore } from '../../store';

import * as selectors from '../selectors';
import * as actions from '../actions';
import { syncCounterSliceId } from '../reducer';

function initStore(preloadedState = {}) {
  return customCongfigStore(preloadedState);
}

describe('initialValue', () => {
  xit('should store initial value', () => {
    const expectedStateSlice = { value: 123456, updatedAt: null };
    const store = initStore({
      [syncCounterSliceId]: expectedStateSlice,
    });

    const state = store.getState();

    // TODO: select some values from state

    // TODO: assertion
    expect(123).toEqual(123);
  });
});

describe('increment', () => {
  xit('should store initial value', () => {
    const initialCounterValue = 1234;
    const store = initStore({
      [syncCounterSliceId]: { value: initialCounterValue, updatedAt: null },
    });

    const incBy = 5;
    // TODO: dspatch action

    const state = store.getState();
    // TODO: select some values from state

    // TODO: assertion
    expect(123).toEqual(123);
  });


});
