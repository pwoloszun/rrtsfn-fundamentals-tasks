import { createSelector } from 'reselect';
import { reduce } from 'lodash';

import { sliceId } from './index';

const selectFeature = (state: any) => {
  return state[sliceId];
};

export const selectRoomDetectorsById = createSelector(
  selectFeature,
  (state) => {
    return state.byId;
  }
);

export const selectRoomDetectorsIds = createSelector(
  selectFeature,
  (state) => {
    return state.ids;
  }
);

export const selectRoomDetectors = createSelector(
  selectRoomDetectorsById,
  selectRoomDetectorsIds,
  (byId, ids: number[]) => {
    return ids.map((id) => byId[id]);
  }
);

export const selectRunningRoomDetectors = createSelector(
  selectFeature,
  (state) => {
    return state.isRunning;
  }
);

export const checkIsRunningRoomDetectorBy = (state: any, roomId: number) => {
  return !!selectRunningRoomDetectors(state)[roomId];
};

export const selectIsRunningIds = createSelector(
  selectRunningRoomDetectors,
  (isRunning) => {
    return reduce(isRunning, (ids: number[], isRunning, key) => {
      if (isRunning) {
        const id = parseFloat(key);
        ids.push(id);
      }
      return ids;
    }, []);
  }
);
