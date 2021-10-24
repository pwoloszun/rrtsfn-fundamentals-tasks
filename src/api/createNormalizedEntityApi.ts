import { normalizeEntities, NormalizedEntities } from 'src/utils/normalize-entities';
import createEntityApi, { Entity, EntityParams } from './createEntityApi';

const DEFAULT_DELAY_IN_MS = 1200;

export default function createNormalizedEntityApi<T extends Entity>(
  baseUrl: string,
  entityKey: string,
  delayInMs = DEFAULT_DELAY_IN_MS
) {
  const api = createEntityApi<T>(baseUrl, delayInMs);

  return {
    getAll(): Promise<NormalizedEntities<T>> {
      return api.getAll()
        .then((entities) => normalizeEntities(entities, entityKey));
    },

    create(params: EntityParams<T>): Promise<NormalizedEntities<T>> {
      return api.create(params)
        .then((entity) => normalizeEntities([entity], entityKey));
    },

    getById(id: number): Promise<NormalizedEntities<T>> {
      return api.getById(id)
        .then((entity) => normalizeEntities([entity], entityKey));
    },

    update(id: number, params: EntityParams<T>): Promise<NormalizedEntities<T>> {
      return api.update(id, params)
        .then((entity) => normalizeEntities([entity], entityKey));
    },

    remove(id: number): Promise<number> {
      return api.remove(id);
    },
  };
}
