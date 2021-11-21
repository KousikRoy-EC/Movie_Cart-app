//we cannot change the state directly we will always return new state in reducer which is a pure function
import {combineReducers} from 'redux'
import { Add_Movies } from "../actions";
import { Add_Favourite, Rem_Fav, setshow } from "../actions";
const mystate = {
  list: [],
  favourite: [],
  setSHOW: false,
};

export function movies(state = mystate, action) {
  if (action.type === Add_Movies) {
    return {
      ...state,
      list: action.movies,
    };
  } else if (action.type === Add_Favourite) {
    const filtered = state.list.filter(
      (movie) => movie.Title !== action.movie.Title
    );
    return {
      list: filtered,
      favourite: [action.movie, ...state.favourite],
    };
  } else if (action.type === Rem_Fav) {
    const filtered = state.favourite.filter(
      (movie) => movie.Title !== action.movie.Title
    );

    return {
      ...state,
      favourite: filtered,
    };
  } else if (action.type === setshow) {
    return {
      ...state,
      setSHOW: action.val,
    };
  }
  return state;
}

const intialsearchstate = { result: {} };

export function search(state = intialsearchstate, action) {
  return state;
}

// const rootState = {
//   movies: mystate,
//   search: intialsearchstate,
// };

// export default function rootstate(state = rootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }


export default combineReducers({movies , search });