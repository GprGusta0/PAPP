import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Filters from "../Components/Filters";
import Layout from "../Layout/Layout";
import Movie from "../Components/Movie";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import Loader from "../Components/Notfications/Loader";
import { RiMovie2Line } from "react-icons/ri";
import { getAllMoviesAction } from "../Redux/Actions/MoviesActions";
import {
  LanguageData,
  RatesData,
  TimesData,
  YearData,
} from "../Data/FilterData";

function MoviesPage() {
  const { search } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get('category');
  const searchFromURL = queryParams.get('searchQuery'); // Get 'searchQuery' value from URL

  const dispatch = useDispatch();
  const [category, setCategory] = useState({ title: categoryFromURL || "Categorias" });
  const [searchQuery] = useState(searchFromURL || ""); // Initialize 'searchQuery' state

  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);
  const [language, setLanguage] = useState(LanguageData[0]);
  const sameClass = "text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain";

  const { isLoading, isError, movies, pages, page } = useSelector((state) => state.getAllMovies);
  const { categories } = useSelector((state) => state.categoryGetAll);

  const queries = useMemo(() => {
    const query = {
      category: category?.title === "Categorias" ? "" : category?.title,
      time: times?.title.replace(/\D/g, ""),
      language: language?.title === "Ordenar Por Idioma" ? "" : language?.title,
      rate: rates?.title.replace(/\D/g, ""),
      year: year?.title.replace(/\D/g, ""),
      search: search ? search : "",
    };
    return query;
  }, [category, times, language, rates, year, search, searchQuery]);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
    dispatch(getAllMoviesAction(queries));
  }, [dispatch, isError, queries]);

  const nextPage = () => {
    dispatch(getAllMoviesAction({ ...queries, pageNumber: page + 1 }));
  };

  const prevPage = () => {
    dispatch(getAllMoviesAction({ ...queries, pageNumber: page - 1 }));
  };

  const datas = {
    categories: categories,
    category: category,
    setCategory: setCategory,
    language: language,
    setLanguage: setLanguage,
    rates: rates,
    setRates: setRates,
    times: times,
    setTimes: setTimes,
    year: year,
    setYear: setYear,
  };

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters data={datas} />
        <p className="text-lg font-medium my-6">
          Total de{" "}
          <span className="font-bold text-subMain">
            {movies ? movies?.length : 0}
          </span>{" "}
          Filmes Encontrados {searchQuery && `for "${searchQuery}"`}
        </p>
        {isLoading ? (
          <div className="w-full gap-6 flex-colo min-h-screen">
            <Loader />
          </div>
        ) : movies?.length > 0 ? (
          <>
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {movies.map((movie, index) => (
                <Movie key={index} movie={movie} />
              ))}
            </div>
            <div className="w-full flex-rows gap-6 md:my-20 my-10">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className={sameClass}
              >
                <TbPlayerTrackPrev className="text-xl" />
              </button>
              <button
                onClick={nextPage}
                disabled={page === pages}
                className={sameClass}
              >
                <TbPlayerTrackNext className="text-xl" />
              </button>
            </div>
          </>
        ) : (
          <div className="w-full gap-6 flex-colo min-h-screen">
            <div className="w-24 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-4xl flex-colo">
              <RiMovie2Line />
            </div>
            <p className="text-border text-sm">
              Parece que não temos nenhum filme
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default MoviesPage;
