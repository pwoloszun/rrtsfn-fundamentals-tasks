import createEntityApi from './createEntityApi';
import { ProductDto } from './dto/product-dto';

export const commonProductApi = createEntityApi<ProductDto>(`/api/products`);

export const vipProductApi = createEntityApi<ProductDto>(`/api/vip-products`);

export const vipRecommendationApi = createEntityApi<ProductDto>(`/api/vip-recommendations`);
