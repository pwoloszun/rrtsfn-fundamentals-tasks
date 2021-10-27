interface Action { // app event
  type: string;

  payload?: any;
}


// FSA Flux Standard Action

class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): any { /*...*/ }
}


// =======
// in app:
const store = new Store();

const state = {
  myCounter: { // initial slice state
    value: 110,
    updatedAt: null,
  },



  counter: { // state slice
    value: 997
  },
  users: { // users state slice
    entities: [],
    count: 123
  },
  todos: [] //state slice
};



// actions
const action: Action = {
  type: 'users/fetched',
  payload: {
    users: [{ id: 123, name: 'bob' }, { id: 2, name: 'ed' }]
  }
}; // "event"

store.dispatch(action);



// reducer(s)
// user slice reducer
function usersReducer(state, action) {
  switch (action.type) {
    case 'users/fetched': {
      const nextState = {};
      return nextState
    }
    case 'gggHhh': {
      const nextState = {};
      return nextState
    }
    default: {
      return state;
    }
  }
}

// counter slice reducer
function counterReducer(state, action) {
}


function rootReducer(state, action) {
  const nextCounterState = counterReducer(state.counter, action);
  const nextUsersState = usersReducer(state.users, action);

  return {
    ...state,
    users: nextUsersState,
    counter: nextCounterState,
  };
}



// client code - Components

// Counter component
store.subscribe(() => {
  const state = store.getState();
  //do smth modufy local cmp state
});

// // Todos component
store.subscribe(() => {
  const state = store.getState();
  //do smth
});
