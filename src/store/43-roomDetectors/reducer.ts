import { produce } from 'immer';
import { indexOf } from 'lodash';

import { types } from "./index";
import { TemperatureInfo } from '../../api/roomTemperatureApi';

interface TemperatureInfosMap {
  [id: number]: TemperatureInfo;
}

export interface NormalizedTemperatureInfo {
  byId: TemperatureInfosMap;
  ids: number[];
}

interface IdBoolMap {
  [id: number]: boolean;
}

interface IdErrorMap {
  [id: number]: Error;
}

interface SliceState extends NormalizedTemperatureInfo {
  isRunning: IdBoolMap;
  errors: IdErrorMap;
}

const initialState: SliceState = {
  byId: {
    200: { id: 200, temperatures: [23], name: '1st room' },
    201: { id: 201, temperatures: [28], name: '2nd room' },
  },
  ids: [200, 201],

  errors: {},

  isRunning: {},
};

export default function roomDetectorsReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.CREATE_NEW_ROOM_DETECTOR_SUCCESS: {
      const createdRoomDetector = action.payload;
      const { id } = createdRoomDetector;
      return produce(state, (draftState) => {
        draftState.byId[id] = createdRoomDetector;
        draftState.ids.push(id);
      });
    }
    // TODO: request & error

    case types.FETCH_ROOM_SUCCESS: {
      const roomDetector = action.payload;
      const { id } = roomDetector;
      return produce(state, (draftState) => {
        draftState.isRunning[id] = true;
        draftState.byId[id] = roomDetector;
        if (indexOf(draftState.ids, id) < 0) {
          draftState.ids.push(id);
        }
      });
    }
    case types.FETCH_ROOM_CANCELLED: {
      const roomId = action.payload;
      return produce(state, (draftState) => {
        draftState.isRunning[roomId] = false;
      });
    }
    // TODO: request & error
    default:
      return state;
  }
}
