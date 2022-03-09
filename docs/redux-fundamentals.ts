interface Action {
  type: string;
  payload?: any;
}


const action1: Action = {
  type: '[Source] Event'
};

const action3: Action = {
  type: 'sliceID/source_event'
};




class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): any { /*...*/ }
}


// =======
// in app:
const store = new Store();

const state = {
  newSyncCounter: { ...}


  counter: { // state slice
    value: 997
  },
  users: { // users state slice
    entities: [],
    count: 123
  },
  todos: [], //state slice


  // ecomerc

  // catalog: {}, // catalog state slice

  // admin: {},

  // order: {}, // order state slice

  // user: {},
};



// actions
const action2: Action = {
  type: 'cartReducer/productSearchPage_addProductToCart',
  payload: { productId: 123 }
};

store.dispatch(action2);



// reducer(s)
function usersReducer(state, action) {

  switch (action.type) {
    case 'increment': {
      const nextState = { ...}
      return nextState;
    }
    case 'tttYyy': {
      const nextState = { ...}
      return nextState;
    }
    default:
      return state;
  }


}

function counterReducer(state, action) {
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
store.subscribe(() => {
  const state = store.getState();
  //do smth modufy local cmp state
});

// // Todos component
store.subscribe(() => {
  const state = store.getState();
  //do smth
});
