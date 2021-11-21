import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addmovies, setSHOW } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    });

    // store.dispatch({
    //   type: "Add_Movies",
    //   movies: data,
    // });

    store.dispatch(addmovies(data));

    // console.log(this.props.store.getState());
  }

  isfav = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourite } = movies;

    var index = favourite.indexOf(movie);

    if (index !== -1) {
      return true;
    }
    return false;
  };


  setstate = (val) => {
    this.props.store.dispatch(setSHOW(val));
  }

  render() {
    const { movies } = this.props.store.getState();
    const { list, favourite, setSHOW } = movies;
    const display = setSHOW ? favourite : list;



    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab  ${setSHOW ? '' : 'active-tabs'}`} onClick={() => this.setstate(false)}>
              Movies
            </div>
            <div className={`tab  ${setSHOW ? 'active-tabs' : ''}`} onClick={() => this.setstate(true)}>
              Fav Movies
            </div>
          </div>
          <div className="list">
            {display.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  movies={movie}
                  dispatch={this.props.store.dispatch}
                  isfav={this.isfav(movie)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
