// Events
interface Action {
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

  counter: { // state slice
    value: 997
  },

  users: { // users state slice
    entities: [],
    count: 123
  },

  todos: [] //state slice
};



// Event
const action = {
  type: 'user/successfullyFetched',
  payload: {
    users: [{ id: 123, name: 'bob' }, { id: 2, name: 'ed' }]
  }
}; // "event"


store.dispatch(action);



// slice reducer(s)
function cartReducer(state, action) {
}

function suggestedProductsReducer(state, action) {
}


function rootReducer(state, action) {
  const nextUsersState = usersReducer(state.users, action);
  const nextCounterState = counterReducer(state.counter, action);

  return {
    ...state,
    users: nextUsersState,
    counter: nextCounterState,
  };
}



// client code - Components

// Counter component
seelctorFn

store.subscribe(() => {
  const state = store.getState();
  //do smth modufy local cmp state
  seelctorFn(state)
});

// // Todos component
store.subscribe(() => {
  const state = store.getState();
  //do smth
});
