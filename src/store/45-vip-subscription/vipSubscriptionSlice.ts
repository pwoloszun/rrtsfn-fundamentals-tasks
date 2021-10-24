import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserDto } from 'src/api/dto/user-dto';
import { ProductDto } from 'src/api/dto/product-dto';

import {
  FetchUserSuccessAction,
  FetchUserRequestedAction,
  FetchProductsSuccessAction,
  AddProductAction, ActivateVipSubRequestAction, ActivateVipSubSuccessAction
} from './ActionTypes';

interface StateSlice {
  vipDuration: number;
  currentUser: UserDto | undefined;
  isLoading: boolean;

  products: ProductDto[];
  recommendations: ProductDto[];
  cart: number[];
}

const initialState: StateSlice = {
  vipDuration: 10000, //in ms
  currentUser: undefined,
  isLoading: false,

  products: [],
  recommendations: [],
  cart: [],
};

export const vipSubscriptionSliceId = 'vipSubscription';

const vipSubscriptionSlice = createSlice({
  name: vipSubscriptionSliceId,
  initialState,
  reducers: {
    fetchUserRequest: (state, action: FetchUserRequestedAction) => {
      //TODO
    },

    fetchUserSuccess: (state, action: FetchUserSuccessAction) => {
      //TODO

    },

    fetchProductsRequest: (state, action: PayloadAction<void>) => {
      //TODO
    },

    fetchProductsSuccess: (state, action: FetchProductsSuccessAction) => {
      //TODO
    },

    addProduct: (state, action: AddProductAction) => {
      //TODO
    },

    // VIP subscription ?

  },
});

export const actions = vipSubscriptionSlice.actions;

export default vipSubscriptionSlice.reducer;
