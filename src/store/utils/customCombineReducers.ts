import { reduce } from 'lodash';
import { Action } from '@reduxjs/toolkit';

interface ReducersMap {
  [featureId: string]: (state: any, action: Action) => any;
}

export default function customCombineReducers(reducersMap: ReducersMap) {
  return function (state: any, action: Action) {
    const nextState = reduce(reducersMap, (resultState: any, sliceReducer: any, sliceId) => {
      const sliceState = state[sliceId];
      resultState[sliceId] = sliceReducer(sliceState, action, resultState);
      return resultState;
    }, {});
    return nextState;
  }
}
