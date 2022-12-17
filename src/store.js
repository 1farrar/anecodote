// import { configureStore } from "@reduxjs/toolkit";
// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";

// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
// });

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notifications: notificationReducer,
    filter: filterReducer,
  },
});

export default store;
