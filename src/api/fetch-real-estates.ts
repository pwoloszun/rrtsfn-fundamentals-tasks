import fetchEntities from './fetch-entities';

export interface RealEstate {
  id: number;
  street: string;
  price: number;
  builtAt: string;
  type: string;
  lat: number;
  lng: number;
}

export default function fetchRealEstates(): Promise<RealEstate[]> {
  return fetchEntities<RealEstate>('/real-estates');
}
