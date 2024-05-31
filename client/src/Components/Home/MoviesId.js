import React, { useState, useEffect } from "react";
import Titles from "../Titles";
import Loader from "../Notfications/Loader";
import { Empty } from "../Notfications/Empty";
import Movie from "../Movie";
import { useSelector, useDispatch } from "react-redux";
import { getMovieByIdAction } from "../../Redux/Actions/MoviesActions";
import { BsCollectionFill } from "react-icons/bs";

function MoviesId({ isLoading, movieIds }) {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieIds && movieIds.length > 0) {
      movieIds.forEach((id) => {
        dispatch(getMovieByIdAction(id));
      });
    }
  }, [dispatch, movieIds]);

  const allMovies = useSelector((state) => state.getMovieById);

  useEffect(() => {
    if (allMovies && allMovies.movies) {
      setMovies(allMovies.movies);
    }
  }, [allMovies]);

  return (
    <div className="my-16">
      <Titles title="Mais Filmes" Icon={BsCollectionFill} />
      <div className="mt-10">
        {isLoading ? (
          <Loader />
        ) : movies?.length > 0 ? (
          <div className="grid sm:mt-12 mt-6 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
          </div>
        ) : (
          <Empty message="Parece que não temos nenhum filme" />
        )}
      </div>
    </div>
  );
}

export default MoviesId;
