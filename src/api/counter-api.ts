import createEntityApi from './createEntityApi';

export interface CounterValueEntity {
  id: number;
  value: number;
};

export type CounterValueParams = Omit<CounterValueEntity, 'id'>;

const counterApi = createEntityApi<CounterValueEntity>(`/api/counter-values`);

export default counterApi;
