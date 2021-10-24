import { Middleware, MiddlewareAPI, Dispatch, Action } from '@reduxjs/toolkit';

const someMiddleware: Middleware = (store: MiddlewareAPI) => {
  // Called ONCE when calling applyMiddleware

  return function (next: Dispatch) {
    // next() function "passes" action to next middleware

    return function <A extends Action>(action: A) {
      // called every time ANY action is dispatched
    };
  };
}

export default someMiddleware;
