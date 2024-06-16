import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Components/Home/Banner";
import PopularMovies from "../Components/Home/PopularMovies";
import MoreMovies from "../Components/Home/MoreMovies";
import TopRated from "../Components/Home/TopRated";
import Layout from "../Layout/Layout";
import {
  getAllMoviesAction,
  getRandomMoviesAction,
  getTopRatedMovieAction,
} from "../Redux/Actions/MoviesActions";
import AllMovies from "../Components/Home/AllMovies";


function HomeScreen() {
  const dispatch = useDispatch();
  // useSelectors
  const {
    isLoading: randomLoading,
    isError: randomError,
    movies: randomMovies,
  } = useSelector((state) => state.getRandomMovies);
  const {
    isLoading: topLoading,
    isError: topError,
    movies: topMovies,
  } = useSelector((state) => state.getTopRatedMovie);
  const { isLoading, isError, movies } = useSelector(
    (state) => state.getAllMovies
  );

  // useEffect
  useEffect(() => {
    // get random movies
    dispatch(getRandomMoviesAction());
    // get all movies
    dispatch(getAllMoviesAction({}));
    // get top rated movies
    dispatch(getTopRatedMovieAction());
    // errors
    if (isError || randomError || topError) {
      toast.error("Ocorreu um erro");
    }
  }, [dispatch, isError, randomError, topError]);

  return (
  <Layout>
    <div className="w-full min-h-screen px-10 mb-6">
      <Banner movies={movies} isLoading={isLoading} />
      <PopularMovies movies={randomMovies} isLoading={randomLoading} />
      <MoreMovies movies={randomMovies} isLoading={randomLoading} />
      <TopRated movies={topMovies} isLoading={topLoading} />
      <AllMovies movies={topMovies} isLoading={topLoading} />
    </div>
  </Layout>
);

}

export default HomeScreen;
