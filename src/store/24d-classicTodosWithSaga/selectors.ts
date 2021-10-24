import { createSelector } from '@reduxjs/toolkit';
import { reduce } from 'lodash';

import { RootState } from '../store';
import { classicTodosWithSagaSliceId, TodoStatus } from './reducer';
import { todoEntitiesAdapter } from './adapters/todo-entities-adapter';

const selectStateSlice = (state: RootState) => {
  return state[classicTodosWithSagaSliceId];
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

const selectTodosStatuses = createSelector(
  [selectStateSlice],
  (state) => state.todosStatuses
);

// TODO
// export const selectIsRemovingTodosMap 

// TODO
// export const selectIsSavingTodosMap

// TODO
// export const selectIsEditingTodosMap
