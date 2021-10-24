import axios from 'axios';

import { isJestRunning } from 'src/mocks/utils/isJestRunning';
import { delayedValue } from 'src/utils/randoms';
import getApiUrl from './getApiUrl';

const DEFAULT_DELAY_IN_MS = isJestRunning() ? 0 : 1800;

export interface Entity {
  id: number;
}

export type EntityParams<T extends Entity> = Omit<Partial<T>, 'id'>;

export default function createEntityApi<T extends Entity>(
  baseUrl: string,
  delayInMs = DEFAULT_DELAY_IN_MS
) {
  const apiDefaultUrl = getApiUrl(`${baseUrl}`);

  return {
    getAll(): Promise<T[]> {
      return axios.get(apiDefaultUrl)
        .then((response) => response.data)
        .then((entities) => delayedValue(entities, DEFAULT_DELAY_IN_MS));
    },

    create(params: EntityParams<T>): Promise<T> {
      return axios.post(apiDefaultUrl, params)
        .then((response) => response.data)
        .then((entity) => delayedValue(entity, DEFAULT_DELAY_IN_MS));
    },

    getById(id: number): Promise<T> {
      const url = getApiUrl(`${baseUrl}/${id}`);
      return axios.get(url)
        .then((response) => response.data)
        .then((entity) => delayedValue(entity, DEFAULT_DELAY_IN_MS));
    },

    update(id: number, params: EntityParams<T>): Promise<T> {
      const url = getApiUrl(`${baseUrl}/${id}`);
      return axios.patch(url, params)
        .then((response) => response.data)
        .then((entity) => delayedValue(entity, DEFAULT_DELAY_IN_MS));
    },

    remove(id: number): Promise<number> {
      const url = getApiUrl(`${baseUrl}/${id}`);
      return axios.delete(url)
        .then((response) => response.data)
        .then(() => delayedValue(id, DEFAULT_DELAY_IN_MS));
    },
  };
}
