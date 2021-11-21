import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import './index.css';
import App from './components/App';
import rootstate from "./Reducers"

const Store =createStore(rootstate)
// console.log("store",Store);
// console.log("Beforestate",Store.getState());

// Store.dispatch({
//   type:"Add_Movies",
//   movies : ["Soryavansham","Charusat","Aman Biography"]
// })

// console.log("AfterState",Store.getState());

ReactDOM.render(
  
    <App store={Store} />
  ,
  document.getElementById('root')
);


