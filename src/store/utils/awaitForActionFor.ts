import { StrictEffect, delay, take, race } from 'redux-saga/effects';

export default function* awaitForActionFor(actionType: string, ms: number): Generator<StrictEffect, boolean, any> {
  const { action } = yield race({
    action: take(actionType),
    timeout: delay(ms)
  });
  return !!action;
}
