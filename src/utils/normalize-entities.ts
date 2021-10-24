import { normalize, schema, } from 'normalizr';

interface EntitiesMap<T> {
  [id: string]: T;
}

export interface NormalizedEntities<T> {
  byId: EntitiesMap<T> | undefined;
  ids: number[];
}

export function normalizeEntities<T>(entities: T[], entityKey: string): NormalizedEntities<T> {
  if (!entityKey) {
    throw new Error(`Missing entityKey`);
  }
  const entitySchema = new schema.Entity(entityKey);
  const listSchema = { [entityKey]: [entitySchema] };
  const normalizedData = normalize({ [entityKey]: entities }, listSchema);
  return {
    byId: normalizedData.entities[entityKey],
    ids: normalizedData.result[entityKey]
  };
}
