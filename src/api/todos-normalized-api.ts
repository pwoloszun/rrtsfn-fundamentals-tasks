import { NormalizedEntities } from 'src/utils/normalize-entities';

import createNormalizedEntityApi from './createNormalizedEntityApi';
import { TodoDto } from './dto/todo-dto';

export type NormalizedTodos = NormalizedEntities<TodoDto>;

const todoNormalizedApi = createNormalizedEntityApi(`/api/todos`, 'todos');

export default todoNormalizedApi;
