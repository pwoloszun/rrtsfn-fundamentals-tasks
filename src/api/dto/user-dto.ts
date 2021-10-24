import { EntityParams } from '../createEntityApi';

export interface UserDto {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  vipUpdatedAt: number | undefined;
}

export type UserDtoParams = EntityParams<UserDto>;
