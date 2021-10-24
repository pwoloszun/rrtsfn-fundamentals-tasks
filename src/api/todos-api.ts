import createEntityApi from './createEntityApi';
import { TodoDto } from './dto/todo-dto';

const todoApi = createEntityApi<TodoDto>(`/api/todos`);

export default todoApi;
