import { useState } from 'react';
import { TodoDto } from 'src/api/dto/todo-dto';
import { TODOS_DATA } from '../data/todos-data';

export type UseManageTodosResult = {
  todos: TodoDto[];
  createTodo: (title: string, description?: string) => void;
  removeTodo: (todo: TodoDto) => void;
  load: () => void;
};

export default function useManageTodos(): UseManageTodosResult {
  const [todos, setTodos] = useState<TodoDto[]>([]);

  const createTodo = (title: string, description?: string): void => {
    setTodos((currTodos) => {
      const id = Math.random();
      const todo: TodoDto = { id, title, description };
      const nextTodos = [...currTodos, todo];
      return nextTodos;
    });
  };

  const removeTodo = (todo: TodoDto): void => {
    setTodos((currTodos) => {
      const nextTodos = currTodos.filter((t) => t.id !== todo.id);
      return nextTodos;
    });
  };

  const load = (): void => {
    setTimeout(() => {
      setTodos([...TODOS_DATA]);
    }, 1800);
  };

  return {
    todos,
    createTodo,
    removeTodo,
    load,
  };
}
