import { Middleware, MiddlewareAPI, Dispatch, Action } from '@reduxjs/toolkit';

const loggerMiddleware: Middleware = (store: MiddlewareAPI) => {
  return function (next: Dispatch) {
    return function <A extends Action>(action: A) {
      console.log(`BEFORE ${action.type}`, store.getState());
      console.log(`action`, action);
      next(action); // WARNING! store.dispatch(action)
      console.log(`AFTER ${action.type}`, store.getState());
      console.log('\n');
    };
  };
}

export default loggerMiddleware;
