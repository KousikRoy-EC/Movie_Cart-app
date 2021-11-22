import React from "react";
import { addfavourite, remfavourite } from "../actions";

class MovieCard extends React.Component {
  addfav = () => {
    const { movies } = this.props;
    this.props.dispatch(addfavourite(movies));
  };

  unfav = () => {
    const { movies } = this.props;
    this.props.dispatch(remfavourite(movies));
  };

  render() {
    const { movies, isfav } = this.props;
    return (
      <div>
        <div className="movie-card">
          <div className="left">
            <img alt="movie-poster" src={movies.Poster} />
          </div>

          <div className="right">
            <div className="title">{movies.Title}</div>
            <div className="plot">{movies.Plot}</div>
            <div className="footer">
              <div className="rating">{movies.imdbRating}</div>
              {isfav ? (
                <button className="favourite-btn" onClick={this.unfav}>
                  UnFavourite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.addfav}>
                  Favourite
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
