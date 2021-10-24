import { AnyAction } from 'redux';

import * as types from './types';

interface IncrementRequestAction extends AnyAction {
  payload: {
  }
}

export function incrementRequest(id: number, incrementBy: number): IncrementRequestAction {
  return {
    type: types.INCREMENT_REQUEST,
    payload: {
    }
  };
}

interface IncrementSuccessAction extends AnyAction {
  payload: {
  }
}

export function incrementSuccess(nextValue: number): IncrementSuccessAction {
  return {
    type: types.INCREMENT_SUCCESS,
    payload: {
    }
  };
}

interface IncrementErrorAction extends AnyAction {
  payload: {
    errorMessage: string;
  }
}

export function incrementError(error: Error): IncrementErrorAction {
  return {
    type: types.INCREMENT_ERROR,
    payload: {
      errorMessage: error.message
    }
  };
}

export type AsyncCounterAction = IncrementRequestAction
  | IncrementSuccessAction
  | IncrementErrorAction;
