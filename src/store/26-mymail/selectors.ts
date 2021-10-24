import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { mymailSliceId, SendStage } from './mymailSlice';

const selectSlice = (state: RootState) => {
  return state[mymailSliceId];
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
  (stage) => stage === SendStage.SendingCancellable
);

export const selectIsSendingCancelled = createSelector(
  selectMailSendStage,
  (stage) => stage === SendStage.SendingCancelled
);

export const selectIsSendingReversible = createSelector(
  selectMailSendStage,
  (stage) => stage === SendStage.SendingReversible
);

export const selectIsSentRolledBack = createSelector(
  selectMailSendStage,
  (stage) => stage === SendStage.SendingReverted
);

export const selectIsSent = createSelector(
  selectMailSendStage,
  (stage) => stage === SendStage.Sent
);
