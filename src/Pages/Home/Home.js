import React, { useEffect } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../Redux/movieSlice";

const Home = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {movies.map((movie) => (
            <Link
              key={movie.id}
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="carosul"
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
