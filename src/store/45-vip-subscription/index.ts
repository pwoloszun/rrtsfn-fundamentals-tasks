import reducer, { vipSubscriptionSliceId, actions } from './vipSubscriptionSlice';

import * as selectors from './selectors';
import * as sagas from './sagas';

export {
  vipSubscriptionSliceId,
  selectors,
  actions,
  sagas,
};

export default reducer;
