import { call, cancel, cancelled, fork, put, take, takeEvery, select, StrictEffect } from 'redux-saga/effects';

import { actions, types, selectors } from "./index";
import roomTemperatureApi, { TemperatureInfo } from '../../api/roomTemperatureApi';
import { delay } from '../../utils/randoms';

function* createNewRoomDetector(action: any): Generator<StrictEffect> {
  try {
    const name = action.payload;
    const createdRoomDetector = yield call(roomTemperatureApi.create, name);
    yield put(actions.createNewRoomDetectorSuccess(createdRoomDetector as TemperatureInfo));
  } catch (e) {
    console.error(e); // TODO: handle error
  }
}

function* createNewRoomDetectorSaga() {
  yield takeEvery(types.CREATE_NEW_ROOM_DETECTOR_REQUEST, createNewRoomDetector);
}

const DELAY_IN_MS = 2600;

function* startTemperatureBgSync(roomId: number) {
  try {
    while (true) {
      // TODO: fetch temperatureInfo every DELAY_IN_MS
    }
  } finally {
    // TODO if thread is canceled then update app state
  }
}

function* stopTemperatureBgSync(roomId: number, bgSyncTask: any) {
  // const stopRoomId = stopAction.payload;
  // TODO
}

function* singleRoomDetectorTrackingFlow(startAction: any): Generator<StrictEffect> {
  const roomId = startAction.payload;
  const isAlreadyRunning = yield select(selectors.checkIsRunningRoomDetectorBy, roomId);

  if (!isAlreadyRunning) {
    // TODO 1: start "separate thread" fetching data every DELAY_IN_MS ms

    // TODO 2: start "separate thread" listening for cancel fetching actions
  }
}

function* multipleRoomDetectorsTrackingFlow() {
  yield takeEvery(types.START_ROOM_TRACKING, singleRoomDetectorTrackingFlow);
}

function* stopAllRoomDetectors() {
  // TODO
}

export {
  createNewRoomDetectorSaga,
  multipleRoomDetectorsTrackingFlow,
  stopAllRoomDetectors,
}
