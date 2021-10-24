import { EntityParams } from '../createEntityApi';

export interface ProductDto {
  id: number;
  name: string;
}

export type ProductDtoParams = EntityParams<ProductDto>;
