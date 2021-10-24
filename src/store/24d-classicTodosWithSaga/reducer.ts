import { AnyAction } from 'redux';
import { produce } from 'immer';

import * as types from './types';
import { TodoEntityState, todoEntitiesAdapter } from './adapters/todo-entities-adapter';

export enum TodoStatus {
  Persisted = 'PERSISTED',
  Saving = 'SAVING',
  Removing = 'REMOVING',
  Editing = 'EDITING',
}

interface SliceState {
  todos: TodoEntityState;

  isFetchingMany: boolean;
  todosStatuses: { [id: number]: TodoStatus };
  errorInfo: {
    info: string;
    error: Error | undefined;
  } | undefined;
}

const initialState: SliceState = {
  todos: todoEntitiesAdapter.getInitialState(),

  isFetchingMany: false,
  todosStatuses: {},
  errorInfo: undefined,
};

export default function todosReducer(
  state = initialState,
  action: AnyAction
): SliceState {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST: {
      return produce(state, (draftState) => {
        draftState.isFetchingMany = true;
      });
    }
    case types.FETCH_TODOS_SUCCESS: {
      const { todos } = action.payload;
      return produce(state, (draftState) => {
        draftState.isFetchingMany = false;
        draftState.todos = todoEntitiesAdapter.setAll(state.todos, todos);
      });
    }

    // case types.START_EDITING_TODO: {
    // }
    // case types.CANCEL_EDITING_TODO: {
    // }

    // case types.OPTIMISTIC_UPDATE_REQUEST: {
    // }
    // case types.OPTIMISTIC_UPDATE_SUCCESS: {
    // }

    // case types.REMOVE_TODO_REQUEST: {
    // }
    // case types.REMOVE_TODO_SUCCESS: {
    // }

    // case types.CREATE_TODO_REQUEST: {
    // }
    // case types.CREATE_TODO_SUCCESS: {
    // }

    default:
      return state;
  }
}

export const classicTodosWithSagaSliceId = 'classicTodosWithSaga';
