import { useState } from 'react';
import { TodoDto } from 'src/api/dto/todo-dto';

import { TODOS_DATA } from '../data/todos-data';

export type UseManageTodosResult = {
  todos: TodoDto[];
  createTodo: (title: string, description?: string) => void;
  removeTodo: (todo: TodoDto) => void;
};

export default function useManageTodos(): UseManageTodosResult {
  const [todos, setTodos] = useState(TODOS_DATA);

  const removeTodo = (todo: TodoDto) => {
    setTodos((currTodos) => {
      const nextTodos = currTodos.filter((td) => td.id !== todo.id);
      return nextTodos;
    });
  };

  const createTodo = (title: string, description?: string) => {
    const id = Math.random();
    const todo = { id, title, description };
    setTodos((currTodos) => {
      const nexTodos = [...currTodos, todo];
      return nexTodos;
    });
  };

  return {
    todos,
    createTodo,
    removeTodo
  };
}
