import { put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import api from 'src/api/todos-api';
import { TodoDto, TodoDtoParams } from 'src/api/dto/todo-dto';

import { actions, TodoUpdate } from './todosWithSagaSlice';

function* fetchTodos(action: any) {
  // TODO
  try {
  } catch (e) {
  }
}

function* fetchTodosSaga() {
  yield takeEvery(actions.fetchTodosRequest, fetchTodos);
}

// function* removeTodo(action: PayloadAction<{ todo: Todo }>)
// function* removeTodoSaga() 

// function* createTodo(action: PayloadAction<{ params: TodoParams }>) 
// function* createTodoSaga() 

// function* optimisticUpdateTodo(action: PayloadAction<{ updateParams: TodoUpdate }>) 
// function* optimisticUpdateTodoSaga() 

export {
  fetchTodosSaga,
  // TODO export
  // removeTodoSaga,
  // createTodoSaga,
  // optimisticUpdateTodoSaga,
}
