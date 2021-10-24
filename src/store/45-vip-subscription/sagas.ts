import { AnyAction } from '@reduxjs/toolkit';
import { put, takeEvery, select, call, StrictEffect } from 'redux-saga/effects';

import { UserDto } from 'src/api/dto/user-dto';
import userApi from 'src/api/user-api';
import { ProductDto } from 'src/api/dto/product-dto';
import { vipProductApi, commonProductApi, vipRecommendationApi } from 'src/api/product-api';

import * as selectors from './selectors';
import { actions } from './vipSubscriptionSlice';
import { FetchUserRequestedAction, ActivateVipSubRequestAction } from './ActionTypes';

function* fetchUserWorkerSaga(action: FetchUserRequestedAction): Generator<StrictEffect> {
  try {
    // TODO
  } catch (e) {
    throw e; // TODO
  }
}

export function* fetchUserWatcherSaga() {
  yield takeEvery(actions.fetchUserRequest, fetchUserWorkerSaga);
}

function* fetchProductsWorkerSaga(): Generator<StrictEffect> {
  try {
    const isVip = false;
    // TODO: ifVip
    // then: fetch VIP products
    // else: fetch common products
  } catch (e) {
    throw e; // TODO
  }
}

export function* fetchProductsWatcherSaga() {
  yield takeEvery(actions.fetchProductsRequest, fetchProductsWorkerSaga);
}

function* activateVipWorkerSaga(action: ActivateVipSubRequestAction): Generator<StrictEffect> {
  try {
    const { timestamp } = action.payload;
    // TODO: persist on server
    const currentUser = (yield select(selectors.selectCurrentUser)) as UserDto;
    const { id } = currentUser;
    yield call(userApi.update, id, { vipUpdatedAt: timestamp } as any);

    // TODO: fetch VIP products
    // TODO: fetch VIP recommendations
  } catch (e) {
    throw e; // TODO
  }
}

export function* activateVipWatcherSaga() {
  // TODO
}
