import axios from 'axios';

import { delayedValue } from 'src/utils/randoms';

import getApiUrl from './getApiUrl';

export default function fetchEntities<T>(path: string): Promise<T[]> {
  const url = getApiUrl(path);

  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .then((entities) => {
      return delayedValue(entities, 2200);
    });
}
