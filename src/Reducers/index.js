//we cannot change the state directly we will always return new state in reducer which is a pure function
import { combineReducers } from "redux";

import {
  Add_Favourite,
  Rem_Fav,
  setshow,
  Addmovielist,
  Add_Movies,
  Add_Search_Movies,
} from "../actions";

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
  } else if (action.type === Addmovielist) {
    return {
      ...state,
      list: [action.movie, ...state.list],
    };
  }

  return state;
}

const initialSearchState = {
  results: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  if (action.type === Add_Search_Movies) {
    return {
      ...state,
      results: action.movie,
      showSearchResults: true,
    };
  }

  if (action.type === Addmovielist) {
    return {
      ...state,
      showSearchResults: false,
    };
  }

  return state;
}

export default combineReducers({ movies, search });
