import createEntityApi from './createEntityApi';

export interface HeroEntity {
  id: number;
  name: string;
  secretIdentity: string;
  universe: string;
}

const heroesApi = createEntityApi<HeroEntity>('/api/heroes');

export default heroesApi;
