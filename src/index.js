import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./components/App";
import rootstate from "./Reducers";
import thunk from "redux-thunk";

// const logger=function ({dispatch , getstate}) {
//   return function (next) {
//     return function (action) {
//       console.log("Action Type ", action.type);
//       next(action);
//     }
//   }
// }

// using currying

const logger =
  ({ dispatch, getstate }) =>
  (next) =>
  (action) => {
    next(action);
  };

const Store = createStore(rootstate, applyMiddleware(logger, thunk));

ReactDOM.render(<App store={Store} />, document.getElementById("root"));
