import * as types from './types';
import { Todo, TodoUpdate, TodoParams } from './adapters/todo-entities-adapter';

export function fetchTodosRequest() {
  return { type: types.FETCH_TODOS_REQUEST };
}

export function fetchTodosSuccess(todos: Todo[]) {
  return {
    type: types.FETCH_TODOS_SUCCESS,
    payload: { todos }
  };
}

// export function startEditingTodo

// export function cancelEditingTodo

// export function optimisticUpdateTodoRequest

// export function optimisticUpdateTodoSuccess

// export function removeTodoRequest

// export function removeTodoSuccess

// export function createTodoRequest

// export function createTodoSuccess
