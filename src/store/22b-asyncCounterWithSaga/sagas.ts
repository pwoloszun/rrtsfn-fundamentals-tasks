import { put, takeEvery, delay, select, call } from 'redux-saga/effects';

import * as counterApi from 'src/api/counter-api';

import { actions } from './asyncCounterWithSagaSlice';
import * as selectors from './selectors';

// private impl details
function* incrementWorkerSaga(action: any): Generator<any, any, any> {
  try {
    const resp1 = yield 'todo';
    console.log('response 1', resp1);

    const resp2 = yield 123;
    console.log('response 2', resp2);

    // TODO: get data from payload

    // TODO: delay for 2 secs

    // TODO: select current counter value from redux store

    // TODO: calculate next counter value === curr value + incBy

    // TODO: update countervalue onserver using API

    // TODO: dispatch incrementSuccess event
  } catch (e) {
    throw e; // TODO handle errors
  }
}

// public interface
export function* incrementWatcherSaga() {
  yield takeEvery(actions.incrementRequest, incrementWorkerSaga);
}

// TODO: incrementWorkerSaga(action: any)
// TODO incrementWatcherSaga() 
