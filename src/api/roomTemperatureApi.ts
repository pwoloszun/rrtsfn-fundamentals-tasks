import { reduce } from 'lodash';

import { delayedValue, randomBetween } from '../utils/randoms';

function deriveNextID() {
  return Math.random();
}

export interface TemperatureInfo {
  id: number;
  temperatures: number[];
  name: string;
}

interface TemperaturesMap {
  [id: number]: TemperatureInfo;
}

const allRoomBaseResults: TemperaturesMap = {
  100: { id: 100, temperatures: [23], name: 'single room' },
  200: { id: 200, temperatures: [21], name: '1st room' },
  201: { id: 201, temperatures: [28], name: '2nd room' },
};

const previousTemperatures = reduce(allRoomBaseResults, (temperaturesMap: any, baseResult, id) => {
  temperaturesMap[id] = baseResult.temperatures[0];
  return temperaturesMap;
}, {});

const DELAY_IN_MS = 800;

const roomTemperatureApi = {
  temperatureFor(roomId: number) {
    const baseResult = allRoomBaseResults[roomId];
    if (!baseResult) {
      throw new Error(`Undefined room ID: ${roomId}`);
    }
    const tempBase = baseResult.temperatures[0];
    const currentTemp = tempBase + randomBetween(-5, 7, true);
    const prevTemp = previousTemperatures[roomId];
    previousTemperatures[roomId] = currentTemp;
    const result = {
      ...baseResult,
      temperatures: [currentTemp, prevTemp],
    };
    return delayedValue(result, DELAY_IN_MS);
  },

  create(name: string) {
    const id = deriveNextID();
    const tempBase = randomBetween(17, 29, true);
    const createdRoomDetector = {
      id,
      name,
      temperatures: [tempBase]
    };
    allRoomBaseResults[id] = createdRoomDetector;
    previousTemperatures[id] = tempBase;
    return delayedValue(createdRoomDetector, DELAY_IN_MS);
  },
};

export default roomTemperatureApi;
