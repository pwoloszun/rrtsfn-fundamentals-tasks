import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MailEntityParams } from 'src/api/mymail-api';

export const mymailSliceId = 'mymail';

export enum SendStage {
  NotSent = 'NOT_SENT',

  SendingCancellable = 'SENDING_CANCELLABLE',
  SendingCancelled = 'SENDING_CANCELLED',

  SendingReversible = 'SENDING_REVERSIBLE',
  SendingReverted = 'SENDING_REVERTED',

  Sent = 'SENT',
}

interface SliceState {
  mailSendStage: SendStage;
  toSend: MailEntityParams | null;
  isMailOpened: boolean;
}

const initialState: SliceState = {
  mailSendStage: SendStage.NotSent,
  toSend: null,
  isMailOpened: false,
};

const mymailSlice = createSlice({
  name: mymailSliceId,
  initialState,
  reducers: {

    mailModalOpened: (state) => {
      state.isMailOpened = true;
    },

    mailModalClosed: (state) => {
      state.isMailOpened = false;
    },

    // TODO

  },
});

const { actions, reducer } = mymailSlice;

export { actions };
export default reducer;
