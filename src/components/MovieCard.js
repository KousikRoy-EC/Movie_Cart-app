import React from "react";

function MovieCard({movies}) {
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
                        <button className="favourite-btn">Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
