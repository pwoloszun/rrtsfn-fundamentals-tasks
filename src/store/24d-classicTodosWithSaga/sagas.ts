import { put, takeEvery, call, StrictEffect } from 'redux-saga/effects';

import api from 'src/api/todos-api';
import { TodoDto } from 'src/api/dto/todo-dto';

import { TodoUpdate } from './adapters/todo-entities-adapter';
import * as actions from './actions';
import * as types from './types';

function* fetchTodos(action: any): Generator<StrictEffect> {
  try {
    const todosNormalized = (yield call(api.getAll)) as TodoDto[];
    yield put(actions.fetchTodosSuccess(todosNormalized));
  } catch (e) {
    console.error(e); // TODO: handle error
  }
}

function* fetchTodosSaga() {
  yield takeEvery(types.FETCH_TODOS_REQUEST, fetchTodos);
}

// TODO
// function* removeTodo(action)
// TODO
// function* removeTodoSaga()


// TODO
// function* createTodo(action)
// TODO
// function* createTodoSaga()


// TODO
// function* optimisticUpdateTodo(action)
// TODO
// function* optimisticUpdateTodoSaga()

export {
  fetchTodosSaga,
  // removeTodoSaga,
  // createTodoSaga,
  // optimisticUpdateTodoSaga,
}
