// import { createStore } from "redux";

// const INITIAL_VALUE = {
//   counter: 1000,
// };
// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     return { counetr: store.counter +1};
//   } else if (action.type === "DECREMENT") {
//     return { counetr: store.counter -1 };
//   }
// };
// const counterStore = createStore(counterReducer);

// export default counterStore;
import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy:false
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...store,counter: store.counter + 1 };
    case "DECREMENT":
      return { counter: store.counter - 1 ,privacy :store.privacy};
    case "ADD":
      return {...store,counter: store.counter + Number(action.payload.num)};  
    case "SUBTRACT":
      return {...store,counter: store.counter - Number(action.payload.num)};
     case "PRIVACY_TOGGLE":
      return { ...store, privacy: !store.privacy};   
    default:
      return store;
  }
};

const counterStore = createStore(counterReducer);

export default counterStore;
