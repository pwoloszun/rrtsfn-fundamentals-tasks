import createEntityApi from './createEntityApi';

export interface RealEstateEntity {
  id: number;
  builtAt: string;
  lat: number;
  lng: number;
  price: number;
  street: string;
  type: string;
}

const realEstateApi = createEntityApi<RealEstateEntity>('/api/real-estates');

export default realEstateApi;
