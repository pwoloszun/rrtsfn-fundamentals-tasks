// Event app
interface Action {
  type: string;
  payload?: any;
}

const action2 = {
  type: 'user/sendMail',
  // payload: [{ name: 'bob' }]
}

// FSA = Flux Standard action

class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): any { /*...*/ }
}


// =======
// in app:
const store = new Store();


const state = {
  // catalog: {
  // }, // catalog  slice

  // cart: {

  // }, // cart state slice

  // order: {},

  // admin: {},

  counter: { // state slice
    value: 997
  },
  users: { // users state slice
    entities: [],
    count: 123
  },
  todos: [] //state slice,
};









// actions
const action = {
  type: 'users/fetched',
  payload: {
    users: [{ id: 123, name: 'bob' }, { id: 2, name: 'ed' }]
  }
}; // "event"

store.dispatch(action);



function counterReducer(state, action) {
  switch (action.type) {
    case 'counter/increment': {
      const nextState = produce(state, (draft) => {

      });
      return nextState;
    }
    case 'counter/decrement': {
      const nextState = {};
      return nextState;
    }
    default: {
      return state;
    }
  }
}


// reducer(s)
function usersReducer(state, action) {
  switch (action.type) {
    case 'users/fetched': {
      const nextState = {};
      return nextState;
    }
    case 'users/removed': {
      const nextState = {};
      return nextState;
    }
    default: {
      return state;
    }
  }
}

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
