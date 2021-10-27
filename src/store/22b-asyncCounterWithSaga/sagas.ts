import { put, takeEvery, delay, select, call } from 'redux-saga/effects';

import counterApi from 'src/api/counter-api';

import { actions } from './asyncCounterWithSagaSlice';
import * as selectors from './selectors';

// private impl details
function* incrementWorkerSaga(action: any): Generator<any, any, any> {
  try {
    const { incBy } = action.payload;

    yield delay(2000);

    const inMemValue = yield select(selectors.selectAsyncCounterWithSagaValue);

    const id = 100;
    const nextValue = inMemValue + incBy; // -987
    const counterEntity = yield call(counterApi.update, id, { value: nextValue });

    const incSuccAction = actions.incrementSuccess({ value: counterEntity.value });
    yield put(incSuccAction);
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

// decrement process:
// 1. read conterValue entity from server
// 2. calc nextValue = entity.value - decBy 
// 3. update counter value on server
// 4. delay for 1s
// 5. dispatch SUCC event -> update value redux store
