import faker from 'faker';
import { merge, shuffle } from 'lodash';

import { TodoDto } from 'src/api/dto/todo-dto';
import { store } from 'src/store/store';
import { actions, selectors } from 'src/store/24c-todosWithSaga'

const delayInSec = {
  create: 10,
  update: 4,
};

const externalTodosWebsocket = {
  isBlocked: {} as { [id: number]: boolean; },
  notBlockedTodos: [] as TodoDto[],
  intervalId: null as any,

  init() {
    store.subscribe(() => {
      const state = store.getState();
      const isRemoving = selectors.selectIsRemovingTodosMap(state);
      const isUpdating = selectors.selectIsSavingTodosMap(state);
      const isEditing = selectors.selectIsEditingTodosMap(state);
      this.isBlocked = merge({}, isRemoving, isEditing, isUpdating);
      const allTodos = selectors.selectAllTodos(state);
      this.notBlockedTodos = allTodos.filter((t: TodoDto) => !this.isBlocked[t.id]);
    });
  },

  open() {
    let i = 0;
    this.intervalId = setInterval(() => {
      i++;
      if (i % delayInSec.create === 0) {
        // TODO
        // store.dispatch(actions.createTodoRequest(this.generateTodoData()));
      }
      if (i % delayInSec.update === 0) {
        const todoToUpdate = shuffle(this.notBlockedTodos)[0];
        // TODO
        // store.dispatch(actions.optimisticUpdateTodoRequest(todoToUpdate, this.generateTodoData()));
      }
    }, 1000);
  },

  close() {
    clearInterval(this.intervalId);
  },

  generateTodoData() {
    return {
      title: faker.lorem.word(),
      description: faker.lorem.words(),
    };
  }
};

externalTodosWebsocket.init();

export default externalTodosWebsocket;
