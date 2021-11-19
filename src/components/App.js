import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {



  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    })



    store.dispatch({
      type: "Add_Movies",
      movies: data,
    });

    // console.log(this.props.store.getState());
  }




  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Fav Movies</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => {
              return <MovieCard key={index} movies={movie} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
