import { createSelector } from '@reduxjs/toolkit';
import { reduce } from 'lodash';

import { RootState } from '../store';
import { todosWithSagaSliceId, todoEntitiesAdapter, TodoStatus } from './todosWithSagaSlice';

const selectStateSlice = (state: RootState) => {
  return state[todosWithSagaSliceId];
};

export const selectIsFetchingMany = createSelector(
  [selectStateSlice],
  (state) => {
    return state.isFetchingMany;
  }
);

const selectTodoEntitiesState = createSelector(
  [selectStateSlice],
  (state) => state.todos
);

const adapterSelectors = todoEntitiesAdapter.getSelectors(selectTodoEntitiesState);

export const selectAllTodos = adapterSelectors.selectAll;

export const selectIsRemovingTodosMap = (state: RootState) => {
  return {}; // TODO
};

export const selectIsSavingTodosMap = (state: RootState) => {
  return {}; // TODO
};

export const selectIsEditingTodosMap = (state: RootState) => {
  return {}; // TODO
};
