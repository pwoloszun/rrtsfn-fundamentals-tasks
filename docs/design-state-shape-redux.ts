interface Todo {
  id: number;
  title: string;
  description?: string;
}

enum TodoStatus {
  SAVING = 'SAVING',
  IS_EDITING = 'IS_EDITING',
  IS_REMOVING = 'IS_REMOVING',
  PERSISTED = 'PERSISTED' // default value
}

// data fetched from API
const todosData: Todo[] = [
  { id: 100, title: 'buy milk', },
  { id: 200, title: 'walk the dog', description: 'important' },
  { id: 300, title: 'do them math', },
  { id: 400, title: 'my 4th', },
  { id: 500, title: '5th entit', },
];


// TODO: designing state shape
const stateSlice = { // snapshot
  // entity aka domain state
  todos: [
    { id: 100, title: 'buy milk', },
    { id: 200, title: 'walk the dog', description: 'important', },
    { id: 300, title: 'do them math', },
    { id: 400, title: 'my 4th', },
    { id: 500, title: '5th entit', },
  ],

  // application aka feature state
  todoStatuses: {
    100: TodoStatus.PERSISTED,
    200: TodoStatus.IS_EDITING,
    300: TodoStatus.IS_EDITING,
  },
  sortedTodos: { sortBy: 'title', asc: true },
  customOrder: [200, 300, 100, 500,],
  isLoading: false,
};

// in my compo
const selectTodosWithStatus = (stateSlice) => {
  return stateSlice.todos.map((todo) => {
    return {
      ...todo,
      status: stateSlice.todoStatuses[todo.id]
    }
  });
}

[
  { id: 100, title: 'buy milk', status: TodoStatus.IS_REMOVING },
]
// ======
// client code(ReactComponent) - TODO
