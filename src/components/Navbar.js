import React from "react";
import { useState } from "react";
import { handle_My_Search, add_movie_to_list } from "../actions";

function Navbar(props) {
  const [searchText, setsearchText] = useState(" ");
  const { showSearchResults, results: movie } = props.result;
  // console.log(props.result);

  function handlechange(e) {
    setsearchText(e.target.value);
  }

  function handleAddToMovies(movie) {
    props.dispatch(add_movie_to_list(movie));
  }

  function handleSearch(e) {
    props.dispatch(handle_My_Search(searchText));
  }

  return (
    <div className="nav">
      <div className="search-container">
        <input onChange={handlechange} />
        <button id="search-btn" onClick={handleSearch}>
          Search
        </button>

        {showSearchResults && (
          <div className="search-results">
            <div className="search-result">
              <img src={movie.Poster} alt="search-pic" />
              <div className="movie-info">
                <span>{movie.Title}</span>
                <button onClick={() => handleAddToMovies(movie)}>
                  Add to Movies
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
