import { PayloadAction } from '@reduxjs/toolkit';

import { UserDto } from 'src/api/dto/user-dto';
import { ProductDto } from 'src/api/dto/product-dto';

export type FetchUserRequestedAction = PayloadAction<{ id: number; }>;
export type FetchUserSuccessAction = PayloadAction<{ user: UserDto; }>;

export type FetchProductsSuccessAction = PayloadAction<{ products: ProductDto[]; }>;

export type AddProductAction = PayloadAction<{ productId: number; }>;

export type ActivateVipSubRequestAction = PayloadAction<{ timestamp: number; }>;
export type ActivateVipSubSuccessAction = PayloadAction<{
  products: ProductDto[];
  recommendations: ProductDto[];
}>;
