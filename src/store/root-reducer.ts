
import syncCounterReducer, { syncCounterSliceId } from './21-syncCounter';
import newSyncCounterReducer, { newSyncCounterSliceId } from './21b-newSyncCounter';

import asyncCounterWithSagaReducer, { asyncCounterWithSagaSliceId } from './22b-asyncCounterWithSaga';
import classicAsyncCounterWithSagaReducer, { classicAsyncCounterWithSagaSliceId } from './22c-classicAsyncCounterWithSaga';

import todosWithSagaReducer, { todosWithSagaSliceId } from './24c-todosWithSaga';
import classicTodosWithSagaReducer, { classicTodosWithSagaSliceId } from './24d-classicTodosWithSaga';

import mymailReducer, { mymailSliceId } from './26-mymail';
import betterMailReducer, { betterMailSliceId } from './27-better-mail';

import roomDetectorsReducer, { sliceId as roomDetectorsSliceId } from './43-roomDetectors';

import vipSubscriptionReducer, { vipSubscriptionSliceId } from './45-vip-subscription';

const rootReducer = {
  [syncCounterSliceId]: syncCounterReducer,
  [newSyncCounterSliceId]: newSyncCounterReducer,

  [asyncCounterWithSagaSliceId]: asyncCounterWithSagaReducer,
  [classicAsyncCounterWithSagaSliceId]: classicAsyncCounterWithSagaReducer,

  // normalized + concepts
  [todosWithSagaSliceId]: todosWithSagaReducer,
  [classicTodosWithSagaSliceId]: classicTodosWithSagaReducer,

  [mymailSliceId]: mymailReducer,
  [betterMailSliceId]: betterMailReducer,

  // advanced sagas
  [roomDetectorsSliceId]: roomDetectorsReducer,
  [vipSubscriptionSliceId]: vipSubscriptionReducer,

};

export default rootReducer;
