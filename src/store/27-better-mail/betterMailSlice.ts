import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MailEntityParams } from 'src/api/mymail-api';

export const betterMailSliceId = 'better-mail';

export enum BetterSendStage {
  NotSent = 'NOT_SENT',

  SendingCancellable = 'SENDING_CANCELLABLE',
  SendingCancelled = 'SENDING_CANCELLED',

  SendingReversible = 'SENDING_REVERSIBLE',
  SendingReverted = 'SENDING_REVERTED',

  Sent = 'SENT',
}

interface SliceState {
  mailSendStage: BetterSendStage;
  toSend: MailEntityParams | null;
  isMailOpened: boolean;
}

const initialState: SliceState = {
  mailSendStage: BetterSendStage.NotSent,
  toSend: null,
  isMailOpened: false,
};

const betterMailSlice = createSlice({
  name: betterMailSliceId,
  initialState,
  reducers: {

    mailModalOpen: (state) => {
      state.isMailOpened = true;
    },

    mailModalClose: (state) => {
      state.isMailOpened = false;
    },

    // TODO

  },
});

const { actions, reducer } = betterMailSlice;

export { actions };
export default reducer;
