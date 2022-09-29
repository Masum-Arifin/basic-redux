

const {createStore} = require("redux")


const ADD_USER = "ADD_USER";


const initialState = {
    users: ['masum'],
  count: 1,
};

const addUser = () =>{
    return{
        type: ADD_USER,
      }
}


const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounterAction = () => {
  return {
    type: RESET,
  };
};
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    Payload: value
  };
};

// CREATING REDUCER
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.Payload,
      };

    default:
      state;
  }
};


// store
const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState());
})

// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(resetCounterAction())
// store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterByValue(5))
store.dispatch(incrementCounterByValue(15))
