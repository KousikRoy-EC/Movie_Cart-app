require("dotenv").config();
export const Add_Movies = "Add_Movies";
export const Add_Favourite = "Add_Favourite";
export const Rem_Fav = "Rem_Fav";
export const setshow = "setSHOW";
export const Add_Search_Movies = "Add_Search_Movies";
export const Addmovielist = "Addmovietolist";
//action creator
const key = process.env.REACT_APP_API_KEY;
console.log(key);

export function addmovies(movies) {
  return {
    type: "Add_Movies",
    movies: movies,
  };
}

export function addfavourite(movie) {
  return {
    type: "Add_Favourite",
    movie,
  };
}

export function remfavourite(movie) {
  return {
    type: "Rem_Fav",
    movie,
  };
}

export function setSHOW(val) {
  return {
    type: "setSHOW",
    val,
  };
}

export function handle_My_Search(moviename) {
  return function (dispatch) {
    var url = `http://www.omdbapi.com/?apikey=${key}&t=${moviename}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        dispatch(addsearchmovie(movie));
      });
  };
}

export function addsearchmovie(movie) {
  return {
    type: Add_Search_Movies,
    movie,
  };
}

export function add_movie_to_list(movie) {
  return {
    type: Addmovielist,
    movie,
  };
}
