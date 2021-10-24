import { call, put, StrictEffect, takeEvery, delay } from 'redux-saga/effects';

import { actions } from './betterMailSlice';

function* sendMailWorker(action: any): Generator<StrictEffect> {
  console.log('mail sending Started');
  try {
    yield delay(1000); // TODO - remove
    
    // await for cancel send for 3sec
    // if (cancellationStarted)
    // else 
  } catch (e) {
    console.error(e); // TODO: handle error
  }
}

export function* sendMailWatcher() {
  yield takeEvery('=== some action TODO ===', sendMailWorker); // TODO
}
