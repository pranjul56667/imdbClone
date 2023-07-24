import React, { useEffect } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../Redux/movieSlice";

const MovieList = () => {
  const { type } = useParams();
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [type, dispatch]);

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movies.map((movie, index) => (
          <Cards movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
