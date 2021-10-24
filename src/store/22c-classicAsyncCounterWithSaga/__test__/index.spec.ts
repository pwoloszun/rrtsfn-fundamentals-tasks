// jest.mock('src/api/counter-api');

import { customCongfigStore } from '../../store';
import * as selectors from '../selectors';
import * as actions from '../actions';
import { classicAsyncCounterWithSagaSliceId } from '../reducer';

function initStore(preloadedState = {}) {
  return customCongfigStore(preloadedState);
}

describe('asyncCounterWithSaga', () => {
  xit('should increment', (done) => {
    const initialCounterValue = 1234;
    const store = initStore({
      [classicAsyncCounterWithSagaSliceId]: {
        asyncWithSagaValue: initialCounterValue,
        isLoading: false,
        errorInfo: undefined
      },
    });
    const incBy = 5;

    // then
    const expectedStateSnapshots = [
      {
        isLoading: true,
        value: initialCounterValue
      },
      {
        isLoading: false,
        value: initialCounterValue + incBy
      }
    ];

    let i = 0;
    store.subscribe(() => {
      const state = store.getState();
      const actualState = {
        isLoading: true, // TODO: use selector
        value: 456, // TODO: use selector
      };
      expect(actualState).toEqual(expectedStateSnapshots[i]);
      if (i < expectedStateSnapshots.length - 1) {
        i++;
      } else {
        done();
      }
    });

    // when
    // TODO: dispatch action
  });


});
