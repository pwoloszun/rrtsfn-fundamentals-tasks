import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const isDevMode = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();

const middleware = getDefaultMiddleware().concat([
  sagaMiddleware,
  // loggerMiddleware
]);

export function customCongfigStore(preloadedState: any = undefined) {
  const store = configureStore({
    devTools: isDevMode,
    reducer: rootReducer,
    middleware,
    preloadedState
  });
  sagaMiddleware.run(rootSaga);
  return store;
}

export const store = customCongfigStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
