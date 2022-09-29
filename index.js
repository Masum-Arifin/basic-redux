

const {createStore} = require("redux")


const ADD_USER = "ADD_USER";


const initialState = {
    users: ['masum'],
  count: 1,
};

const addUser = (user) =>{
    return{
        type: ADD_USER,
        Payload: user,
      }
}


// const incrementCounterAction = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// const decrementCounterAction = () => {
//   return {
//     type: DECREMENT,
//   };
// };
// const resetCounterAction = () => {
//   return {
//     type: RESET,
//   };
// };
// const incrementCounterByValue = (value) => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     Payload: value
//   };
// };

// CREATING REDUCER
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_USER:
      return {
          users:[...state.users, action.Payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};


// store
const store = createStore(userReducer)

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch(addUser('alvin'))
