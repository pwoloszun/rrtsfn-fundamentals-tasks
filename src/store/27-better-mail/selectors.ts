import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { betterMailSliceId, BetterSendStage } from './betterMailSlice';

const selectSlice = (state: RootState) => {
  return state[betterMailSliceId];
};

export const selectIsMailOpened = createSelector(
  selectSlice,
  (state) => state.isMailOpened
);

export const selectMailSendStage = createSelector(
  selectSlice,
  (state) => state.mailSendStage
);

export const selectIsSendingMail = createSelector(
  selectMailSendStage,
  (stage) => stage === BetterSendStage.SendingCancellable
);

export const selectIsSendingCancelled = createSelector(
  selectMailSendStage,
  (stage) => stage === BetterSendStage.SendingCancelled
);

export const selectIsSendingReversible = createSelector(
  selectMailSendStage,
  (stage) => stage === BetterSendStage.SendingReversible
);

export const selectIsSentRolledBack = createSelector(
  selectMailSendStage,
  (stage) => stage === BetterSendStage.SendingReverted
);

export const selectIsSent = createSelector(
  selectMailSendStage,
  (stage) => stage === BetterSendStage.Sent
);
