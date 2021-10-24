import reducer, { betterMailSliceId, actions } from './betterMailSlice';

import * as selectors from './selectors';
import * as sagas from './sagas';

export {
  betterMailSliceId,
  selectors,
  actions,
  sagas,
}

export default reducer;
