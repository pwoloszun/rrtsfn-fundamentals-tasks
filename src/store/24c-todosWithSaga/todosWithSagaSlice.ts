import { createSlice, PayloadAction, createEntityAdapter, EntityState, Update } from '@reduxjs/toolkit';

import { TodoDto, TodoDtoParams } from 'src/api/dto/todo-dto';

export enum TodoStatus {
  Persisted = 'PERSISTED',
  Saving = 'SAVING',
  Removing = 'REMOVING',
  Editing = 'EDITING',
}

export const todoEntitiesAdapter = createEntityAdapter<TodoDto>();

type TodoEntityState = EntityState<TodoDto>;
export type TodoUpdate = Update<TodoDto>;

interface TodosWithSagaSliceState {
  // domain/entities state
  todos: TodoEntityState;

  // feature/app logic state
  isFetchingMany: boolean;
  todosStatuses: { [id: number]: TodoStatus };
  errorInfo: {
    info: string;
    error: Error | undefined;
  } | undefined;
}

const initialState: TodosWithSagaSliceState = {
  todos: todoEntitiesAdapter.getInitialState(),

  isFetchingMany: false,
  todosStatuses: {},
  errorInfo: undefined,
};

export const todosWithSagaSliceId = 'todosWithSaga';

export const todosWithSagaSlice = createSlice({
  name: todosWithSagaSliceId,
  initialState,
  reducers: {
    fetchTodosRequest: (state) => {
      // TODO
    },
    fetchTodosSuccess: {
      reducer: (state, action: PayloadAction<{}>) => {
        // TODO
      },
      prepare: () => {
        return {
          payload: {}
        };
      }
    },

    // TODO other features: remove, startEditing, cancelEditing, opimisticUpdate, create/optimisticCreate

    errorOccured: {
      reducer: (state, action: PayloadAction<{ info: string; error: Error; }>) => {
        const { info, error } = action.payload;
        state.errorInfo = { info, error };
      },
      prepare: (info: string, error: Error) => {
        return {
          error: true,
          payload: { error, info }
        };
      }
    },
  },
});

export const actions = todosWithSagaSlice.actions;

export default todosWithSagaSlice.reducer;
