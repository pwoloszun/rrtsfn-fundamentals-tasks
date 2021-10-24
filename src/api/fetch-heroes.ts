import fetchEntities from './fetch-entities';

export interface Hero {
  id: number;
  name: string;
  secretIdentity: string;
  universe: string;
}

export default function fetchHeroes(): Promise<Hero[]> {
  return fetchEntities<Hero>('/heroes');
}
