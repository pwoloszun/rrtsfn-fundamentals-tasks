import { createSelector } from 'reselect';

import { RootState } from '../store';

import { vipSubscriptionSliceId } from './vipSubscriptionSlice';

const selectFeature = (state: RootState) => state[vipSubscriptionSliceId];

export const selectCurrentUser = createSelector(
  [selectFeature],
  (state) => state.currentUser
);

export const selectProducts = createSelector(
  [selectFeature],
  (state) => state.products
);

export const selectIsLoading = createSelector(
  [selectFeature],
  (state) => state.isLoading
);

// TODO: export const selectIsVip
