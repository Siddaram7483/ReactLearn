import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";

const counterStore = configureStore({reducer:{
  counter:counterSlice.reducer,
  privacy:privacySlice.reducer
}});

export default counterStore;































 /* 
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
*/