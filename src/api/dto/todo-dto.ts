import { EntityParams } from '../createEntityApi';

export interface TodoDto {
  id: number;
  title: string;
  description?: string;
}

export type TodoDtoParams = EntityParams<TodoDto>;
