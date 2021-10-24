import { TodoDto } from 'src/api/dto/todo-dto';

export type UseManageTodosResult = {
  todos: TodoDto[];
  createTodo: (title: string, description?: string) => void;
  removeTodo: (todo: TodoDto) => void;
};

export default function useManageTodos(): UseManageTodosResult {
  return null as any as UseManageTodosResult; // TODO
}
