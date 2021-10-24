import { AnyAction } from 'redux';
import { put, takeEvery, select } from 'redux-saga/effects';

import * as api from 'src/api/counter-api';

import * as actions from './actions';
import * as types from './types';
import * as selectors from './selectors';

// worker
function* incrementCounter(action: AnyAction) {
  try {
    const { id, incrementBy } = action.payload;
    // TODO 1: select current AsyncCounter value from Store

    // TODO 2: update counter value using api

    // dispatch success action to Store using put() effect
  } catch (e) {
    // TODO: handle error
  }
}

// wacher saga
function* asyncIncrementSaga() {
  yield takeEvery(types.INCREMENT_REQUEST, incrementCounter);
}

// fetch current async counter value from server
// api.getCounterValue(id);

// TODO: function* decrementCounter

// TODO: function* asyncDecrementSaga

export {
  asyncIncrementSaga,
  // TODO: asyncDecrementSaga
}
