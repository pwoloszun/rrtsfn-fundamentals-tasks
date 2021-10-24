import { Middleware, MiddlewareAPI, Dispatch, Action } from '@reduxjs/toolkit';

const DELAY_IN_MS = 2400;

function delayAction<A extends Action>(action: A) {
  return {
    type: '@priority/DELAYED',
    payload: {
      createdAt: Date.now(),
      delayed: action.type
    }
  };
}

const priorityMiddleware: Middleware = function (store: MiddlewareAPI) {
  return function (next: Dispatch) {
    return function <A extends Action>(action: A) {
      const { meta } = action as any;
      if (meta && meta.priority === 'low') {
        store.dispatch(delayAction(action)); // TODO dispatch '@priority/DELAY' action
        setTimeout(() => { // delay passing original action
          next(action);
        }, DELAY_IN_MS);
      } else {
        next(action);
      }
    };
  };
}

export default priorityMiddleware;
