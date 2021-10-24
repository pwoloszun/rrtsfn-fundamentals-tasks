import reducer, { syncCounterSliceId } from "./reducer";

import * as selectors from "./selectors";
import * as actions from "./actions";
import * as types from "./types";

export {
  syncCounterSliceId,
  selectors,
  actions,
  types
};

export default reducer;
